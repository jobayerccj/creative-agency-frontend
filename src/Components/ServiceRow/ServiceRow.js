import React from 'react';

const ServiceRow = (props) => {
    const { _id, username, email, service,details, status } = props.order;

    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const updateStatus = id => {

        fetch(url + 'updateStatus', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ _id:id, status: document.getElementById(id).value})
        })
            .then(res => res.json())
            .then(result =>{
                    console.log('result', result);
                }
            );
    }
    return (
        <>
        <tr>
            <td>{username}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{details}</td>
            <td>
                <select className="form-control" onChange={() => updateStatus(_id)} id={_id}>
                    <option>Pending</option>
                    <option>Done</option>
                </select>
            </td>
        </tr>
        </>
    );
};

export default ServiceRow;
