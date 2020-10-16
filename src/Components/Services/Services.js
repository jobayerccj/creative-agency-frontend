import React, {useContext, useEffect, useState} from 'react';
import './Services.css';
import ServiceItem from "../ServiceItem/ServiceItem";
import {UserContext} from "../../App";

const Services = () => {

    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(url + 'services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setServices(data));
    },[]);

    return (
        <div className="row">
            <div className="text-center services">
                <h2>Provide awesome <span className="spGreen">services</span></h2>
                {
                    services.map(service => {
                        return <ServiceItem key={service._id} service={service}/>
                    })
                }

            </div>
        </div>
    );
};

export default Services;
