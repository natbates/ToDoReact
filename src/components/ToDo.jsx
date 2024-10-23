import React from "react";
import "../styles/ToDo.css";

const ToDo = ({ ToDoList, markAsDone, moveToTop }) => {
    return (
        <div className="todo-container">
            <h2 className="todo-title">To-Do</h2>
            <ul className="todo-list">
                {ToDoList.map((item, index) => (
                    <li 
                        key={index} 
                        className="todo-item"
                        onClick={() => moveToTop(index)} // Move item to top on click
                    >
                        <p>{item}</p>
                        <button className="done-button" onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering moveToTop when clicking "Done"
                            markAsDone(index);
                        }}>
                            <img src="/images/greentick.png" className="done-img" alt="Done"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
