import React, {useContext, useState} from 'react';
import {UserContext} from "../../App";
import {Link, useHistory, useParams} from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const AddService = () => {
    const history = useHistory();

    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);
    let { servicename } = useParams();
    const [serviceData, setServiceData] = useState({});
    const [serviceFile, setServiceFile] = useState(null);

    const reditecToServiceList = (result) => {
        if(result){
            history.push('/servicelist');
        }else{
            alert('Something went wrong, please try again.');
        }
    }

    const handleInputChange = e => {
        const data = { ...serviceData };
        data[e.target.name] = e.target.value;
        setServiceData(data);
    }

    const handleFileUpload = (e) => {
        const currentFile = e.target.files[0];
        setServiceFile(currentFile);
    }

    const handleSubmission = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', serviceData.name);
        formData.append('details', serviceData.details);
        formData.append('image', serviceFile);

        // const formData = {
        //     'name': serviceData.name,
        //     'details':serviceData.details,
        //     'image':serviceFile
        // }

        fetch(url + 'submitService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                reditecToServiceList(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <Topbar/>

            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4" id="mainSection">
                        <h2>Add Service</h2>
                        <form onSubmit={handleSubmission}>
                            <div className="col-md-6 float-left">

                                <div className="form-group">
                                    <label>Service Title</label>
                                    <input type="text" onBlur={handleInputChange} className="form-control"
                                           aria-describedby="emailHelp" placeholder="Enter title" name="name"/>
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" onBlur={handleInputChange} placeholder="Enter Description" rows="5" name="details"></textarea>
                                </div>

                            </div>
                            <div className="col-md-6 float-left">
                                <label>Icon</label>
                                <input onChange={handleFileUpload} type="file" className="form-control" name="imageName"/>
                            </div>

                            <div className="col-md-12 float-left">
                                <button type="submit" className="btn customBtn" >Submit</button>
                            </div>

                        </form>

                    </main>
                </div>
            </div>
        </>
    );
};

export default AddService;
