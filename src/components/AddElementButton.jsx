import React from "react";

const AddElementButton = ({AddElement}) =>
{
    return (
        <div>
            <button onClick={AddElement}>+</button>
        </div>
    );
};

export default AddElementButton;