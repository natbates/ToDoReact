import React from "react";
import Element from "./Element";
import AddElementButton from "./AddElementButton"
import { useState } from "react";

const Container = ({title}) =>
{
    const [Elements, SetElements] = useState([]);

    const AddEmptyElement = () =>
    {
        SetElements(Elements.concat([<Element/>]))
    }

    const handleOnDrag = (e, text) =>
    {
        console.log(text);
    }

    return (
        <div className = "container">
            <h1>{title}</h1>
            <AddElementButton AddElement = {AddEmptyElement}/>
            {Elements.map((_, index) => (
                <Element key={index} handleOnDrag={handleOnDrag}/>
            ))}
        </div>
    );
};

export default Container;