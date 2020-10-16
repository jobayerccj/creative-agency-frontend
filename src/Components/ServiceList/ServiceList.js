import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {UserContext} from "../../App";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import AdminServiceList from "../AdminServiceList/AdminServiceList";
import UserServiceList from "../UserServiceList/UserServiceList";

const ServiceList = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);

    const [orderData, setOrderData] = useState({});


    useEffect(() => {
        fetch(url + 'isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data =>{
                    setIsAdmin(data);
                }

            );
    }, []);



    return (
        <>
            <Topbar/>

            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4" id="mainSection">
                        { isAdmin && <AdminServiceList />
                        }

                        {!isAdmin && <UserServiceList/>}
                    </main>
                </div>
            </div>
        </>
    );
};

export default ServiceList;
