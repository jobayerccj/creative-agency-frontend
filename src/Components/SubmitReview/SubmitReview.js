import React, {useContext, useState} from 'react';
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import {useHistory, useParams} from "react-router-dom";
import {UserContext} from "../../App";

const SubmitReview = () => {
    const history = useHistory();

    let url = "http://localhost:5000/";
    //let url = "https://volunteer2020j2.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);

    const [reviewsData, setReviewsData] = useState({});

    const reditecToServiceList = (result) => {
        if(result){
            history.push('/servicelist');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const handleInputChange = e => {
        const data = { ...reviewsData };
        data[e.target.name] = e.target.value;
        setReviewsData(data);
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        const formData = {
            'name': reviewsData.name,
            'designation':reviewsData.designation,
            'description':reviewsData.description
        }

        fetch(url + 'submitreviews', {
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
                        <h2>Review</h2>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmission}>
                                <div className="form-group">

                                    <input type="text" onBlur={handleInputChange} className="form-control"
                                            placeholder="Your name" name="name"/>
                                </div>

                                <div className="form-group">

                                    <input type="text" className="form-control" onBlur={handleInputChange}
                                            placeholder="Company's name / designation" name="designation"/>
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" onBlur={handleInputChange} placeholder="Description" rows="5" name="description"></textarea>
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

export default SubmitReview;
