import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../App";
import * as firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import './HeaderHome.css';

const HeaderHome = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const logout = () => {
        firebase.auth().signOut()
            .then(res => {
                //console.log(res);

                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }
                setLoggedInUser(signedOutUser);
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 box-shadow">
                <Link to="/">
                    <img className="my-0 mr-md-auto" src={"./images/logos/logo.png"} alt="creative agency" style={{width: "30%"}}/>
                </Link>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    <Link className="p-2 text-dark" to="#">Our Portfolio</Link>
                    <Link className="p-2 text-dark" to="/registeredevents">Our Team</Link>
                    <Link className="p-2 text-dark" to="#">Contact Us</Link>
                </nav>

                {
                    loggedInUser.email && <button className="btn btn-dark" onClick={() => logout()}>Logout</button>
                }

                {
                    !loggedInUser.email && <Link className="btn btn-dark " to="/login">Login</Link>
                }

                {/*<Link className="btn btn-dark" to="/admin">Admin</Link>*/}

            </div>

        </div>
    );
};

export default HeaderHome;
