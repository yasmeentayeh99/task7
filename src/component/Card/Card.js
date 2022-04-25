import React from 'react';
import './Card.css'

function Card(){
    return(
        <Card>
            <div className="courses-container">
                <div className="course">
                    <div className="course-preview">
                        <h6>Course</h6>
                        <h2>JavaScript Fundamentals</h2>
                        <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="course-info">
                        <h6>Chapter 4</h6>
                        <h2>Callbacks & Closures</h2>
                        <button className="btn">Continue</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default Card;
