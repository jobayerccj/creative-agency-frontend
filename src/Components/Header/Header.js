import React from 'react';
import {useLocation} from "react-router-dom";
import HeaderHome from "../HeaderHome/HeaderHome";
import './Header.css';
import HeaderAuth from "../HeaderAuth/HeaderAuth";

const Header = () => {
    let location = useLocation();
    //console.log(location.pathname);
    if(location.pathname == '/login'){
        return (
                <HeaderAuth/>
        );
    }else if(location.pathname == '/'){
        return (
            <div className="headSection">
                <HeaderHome/>
            </div>
        );
    }else{
        return (
            <div></div>
        )
    }


};

export default Header;
