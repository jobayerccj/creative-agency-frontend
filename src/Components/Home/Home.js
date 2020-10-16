import React from 'react';

import Frame from "../../images/logos/Frame.png";
import ClientList from "../ClientList/ClientList";
import Services from "../Services/Services";
import Works from "../Works/Works";
import Feedbacks from "../Feedbacks/Feedbacks";
import Contact from "../Contact/Contact";

const Home = () => {

    return (
        <>
            <div className="bg-selected">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 float-left">
                        <h1>Let’s Grow Your<br/>
                            Brand To The<br/>
                            Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Purus commodo ipsum duis <br/>laoreet maecenas. Feugiat </p>
                        <button className="btn customBtn">Hire Us</button>
                    </div>

                    <div className="col-md-6 float-left">
                        <img src={Frame} alt="header home" className="img-fluid "/>
                    </div>
                </div>


            </div>
        </div>
            <ClientList/>
            <Services/>
            <Works/>
            <Feedbacks/>
            <Contact/>
        </>
    );
};

export default Home;
