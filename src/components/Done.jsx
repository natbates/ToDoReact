import React from "react";
import "../styles/Done.css";

const Done = ({ DoneList }) => {
    return (
        <div className="done-container">
            <h2 className="done-title">Done</h2>
            <ul className="done-list">
                {DoneList.map((item, index) => (
                    <li key={index} className="done-item"><p>{item}</p></li>
                ))}
            </ul>
        </div>
    );
}

export default Done;
