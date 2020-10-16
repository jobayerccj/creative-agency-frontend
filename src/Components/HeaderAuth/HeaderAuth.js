import React from 'react';
import {Link} from "react-router-dom";
import './HeaderAuth.css';

const HeaderAuth = () => {
    return (
        <div className="container text-center">
            <div className="col-md-12">

                <Link to="/">
                    <img className="my-0 mr-md-auto" src={"./images/logos/logo.png"} alt="creative agency" style={{width: "15%","padding":"2rem 0"}}/>
                </Link>

            </div>

        </div>
    );
};

export default HeaderAuth;
