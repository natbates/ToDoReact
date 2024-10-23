import React, { useState } from "react";
import Done from "./components/Done";
import ToDo from "./components/ToDo";

const App = () => {
    const [ToDoList, setToDoList] = useState([]);
    const [DoneList, setDoneList] = useState([]);

    const addTask = () => {
        const newTask = window.prompt("Enter a new task:");
        if (newTask && newTask.trim()) {
            setToDoList([...ToDoList, newTask.trim()]);
        }
    };

    const markAsDone = (index) => {
        const taskToMove = ToDoList[index];
        setToDoList(ToDoList.filter((_, i) => i !== index));
        setDoneList([...DoneList, taskToMove]);
    };

    const moveToTop = (index) => {
        const taskToMove = ToDoList[index];
        // Create a new list with the clicked item moved to the top
        const updatedList = [taskToMove, ...ToDoList.filter((_, i) => i !== index)];
        setToDoList(updatedList);
    };

    return (
        <div id = "main">
            <h1>To-Do App</h1>
            <p>Simple to do app built by Nathaniel Bates</p>
            <button id = "add-item" onClick={addTask}>+</button>
            <ToDo ToDoList={ToDoList} markAsDone={markAsDone} moveToTop = {moveToTop}/>
            <Done DoneList={DoneList} />
        </div>
    );
}

export default App;
