import React from 'react';
import './ServiceItem.css';
import {Link} from "react-router-dom";

const ServiceItem = (props) => {
    const { _id, name, details,image  } = props.service;

    return (

            <div className="col-md-4 text-center float-left serviceItem">
                <Link  to={`/placeorder/${name}`}>
                    <div className="hover01">
                        <img style={{"width": "30%"}} src={`data:image/png;base64,${image.img}`}/>
                        {/*<img src={`./images/icons/${ imageName }`} alt="test" className="img-fluid" style={{"width": "30%"}}/>*/}
                        <h4>{name}</h4>
                        <p>{details}</p>
                    </div>
                </Link>
            </div>

    );
};

export default ServiceItem;
