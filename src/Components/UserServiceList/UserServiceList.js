import React, {useContext, useEffect, useState} from 'react';
import ServiceCard from "../ServiceCard/ServiceCard";
import {UserContext} from "../../App";

const UserServiceList = () => {
    const [orderData, setOrderData] = useState([]);
    const [loggedInUser] = useContext(UserContext);
    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    useEffect(() => {
        fetch(url + 'submittedOrderList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email, adminType:false })
        })
            .then(res => res.json())
            .then(result =>{
                    console.log('result', result);
                    setOrderData(result);
                }

            );
    }, []);
    return (
        <div>
            {
                orderData.map(order => {
                    return <ServiceCard order={order} key={order._id}/>
                })
            }
        </div>
    );
};

export default UserServiceList;
