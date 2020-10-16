import React, {useContext, useState} from 'react';
import {UserContext} from "../../App";
import {useHistory, useParams} from "react-router-dom";
import './PlaceOrder.css';
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const PlaceOrder = () => {
    const history = useHistory();

    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);
    let { servicename } = useParams();
    const [orderData, setOrderData] = useState({});

    const reditecToServiceList = (result) => {
        if(result){
            history.push('/servicelist');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const handleInputChange = e => {
        const data = { ...orderData };
        data[e.target.name] = e.target.value;
        setOrderData(data);
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        const formData = {
            'username': orderData.username,
            'email':loggedInUser.email,
            //'email':orderData.email,
            'service':servicename,
            'details':orderData.details,
            'price':orderData.price,
            'status':'pending'
        }

        fetch(url + 'submitOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                reditecToServiceList(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <Topbar/>

            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4" id="mainSection">
                        <h2>Order</h2>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmission}>
                                <div className="form-group">

                                    <input type="text" onBlur={handleInputChange} className="form-control"
                                           aria-describedby="emailHelp" placeholder="Your name / company’s name" name="username"/>

                                </div>
                                <div className="form-group">

                                    <input type="email" onBlur={handleInputChange} className="form-control"
                                           aria-describedby="emailHelp" placeholder="Your email address" name="email" value={loggedInUser.email} name="email"/>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" readOnly placeholder="Service Name" value={servicename} name="service"/>
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" onBlur={handleInputChange} placeholder="Project Details" rows="5" name="details"></textarea>
                                </div>

                                <div className="form-group">

                                    <input type="number" className="form-control"
                                           placeholder="Price" onBlur={handleInputChange} name="price"/>
                                </div>

                                <button type="submit" className="btn customBtn" >Submit</button>
                            </form>
                        </div>

                    </main>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;
