import React from 'react';
import './FeedbackItem.css';

const FeedbackItem = (props) => {
    const {name, designation, description} = props.review;
    return (
        <>
            <div className="col-md-4 float-left ">
                <div className="feedbackItem">
                    <div className="col-md-12">
                        <p><b>{name}</b></p>
                        <p>{designation}</p>
                    </div>
                    <div className="col-md-12">
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FeedbackItem;
