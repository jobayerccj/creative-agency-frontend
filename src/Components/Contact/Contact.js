import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container-fluid" id="contactSection">
            <div className="row">
                <div className="p-5 col-md-5">
                    <h1>Let us handle your project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>

                <div className="p-5 col-md-6">
                    <form>
                        <div className="form-group">

                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Your email address"/>

                        </div>
                        <div className="form-group">

                            <input type="text" className="form-control" id="exampleInputPassword1"
                                   placeholder="Your name / company’s name"/>
                        </div>

                        <div className="form-group">

                            <textarea className="form-control" placeholder="Your message" rows="9"></textarea>
                        </div>

                        <button type="submit" className="btn customBtn">Submit</button>
                    </form>
                </div>


            </div>

            <div className="row text-center">
                <div className="col-md-12">
                    <p>copyright Orange labs 2020</p>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
