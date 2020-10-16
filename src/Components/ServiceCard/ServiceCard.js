import React from 'react';

const ServiceCard = (props) => {
    const { username, email, service,details, status } = props.order;
    return (
        <div className="col-md-5" style={{backgroundColor:"white"}}>
            <div className="col-md-9 float-left">
                <p><b>{service}</b></p>
            </div>
            <div className="col-md-3 float-left">
                <p className="text-danger">{status}</p>
            </div>
            <div className="col-md-12">
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
