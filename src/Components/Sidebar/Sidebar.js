import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser] = useContext(UserContext);
    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    useEffect(() => {
        fetch(url + 'isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);


    return (
        <>
            <nav className="col-md-2 d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">

                        <li className="nav-item">
                            <Link  to={`/placeorder/.`} className="nav-link text-dark">
                                    <span data-feather="file"></span>
                                    Order
                            </Link>
                        </li>
                        <li className="nav-item">

                            <Link  to={`/servicelist`} className="nav-link text-dark">
                                <span data-feather="shopping-cart"></span>
                                Service list
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  to={`/submitreview`} className="nav-link text-dark">
                                <span data-feather="users"></span>
                                Review
                            </Link>
                        </li>

                        {isAdmin &&
                            <li className="nav-item">
                                <Link  to={`/addservice`} className="nav-link text-dark">
                                <span data-feather="users"></span>
                                Add Service
                                </Link>
                            </li>
                        }

                    </ul>


                </div>
            </nav>
        </>
    );
};

export default Sidebar;
