import React, {useContext, useEffect, useState} from 'react';
import ServiceRow from "../ServiceRow/ServiceRow";
import {UserContext} from "../../App";

const AdminServiceList = () => {

    const [orderData, setOrderData] = useState([]);
    const [loggedInUser] = useContext(UserContext);
    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    useEffect(() => {
        fetch(url + 'submittedOrderList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email, adminType:true })

        })
            .then(res => res.json())
            .then(result =>{
                    console.log('result', result);
                    setOrderData(result);
                }

            );
    }, []);

    return (
        <>
            <h2>Services List</h2>
            <div className="col-md-12">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData.map(order => {
                                    return <ServiceRow order={order} key={order._id}/>

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminServiceList;
