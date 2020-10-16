import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import './ClientList.css';

const ClientList = () => {
    return (
        <div className="text-center clientList">
            <img src={slack} className="img-thumbnail clientImg" />
            <img src={google} className="img-thumbnail clientImg" />
            <img src={uber} className="img-thumbnail clientImg" />
            <img src={netflix} className="img-thumbnail clientImg" />
            <img src={airbnb} className="img-thumbnail clientImg" />

        </div>
    );
};

export default ClientList;
