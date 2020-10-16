import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

const Topbar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <>
            <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
                <Link to="/">
                    <img className="my-0 mr-md-auto" src={"../images/logos/logo.png"} alt="volunteer works" style={{width: "30%"}}/>
                </Link>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link text-dark" href="#">{loggedInUser.name}</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Topbar;
