import React, {useContext, useEffect, useState} from 'react';
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import './Feedbacks.css';
import {UserContext} from "../../App";

const Feedbacks = () => {
    //let url = "http://localhost:5000/";
    let url = "https://creative-agency-j1.herokuapp.com/";

    const [loggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(url + 'reviews', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    },[]);

    return (
        <div className="container feedbacks">
            <div className="row text-center">
                <div className="col-md-12 ">
                    <h2>Clients Feedback</h2>
                </div>
            </div>
            <div className="row">
                {
                    reviews.map(review => {
                        return <FeedbackItem key={review._id} review={review}/>
                    })
                }

            </div>
        </div>
    );
};

export default Feedbacks;
