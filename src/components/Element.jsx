import React, { useState, useEffect} from "react";

const Element = ({handleOnDrag}) =>
{
    const [text, setText] = useState("");

    const changeText = (e) => {
        setText(e.target.value); // Get the input value from the event
    };

    return (
        <div className="element" draggable onDragStart={(e) => handleOnDrag(e, text)}>
            <input value = {text} onChange={changeText} type = "text"></input>
        </div>
    );
}

export default Element;