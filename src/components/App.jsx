import React from "react-dom";
import Container from "./Container";

const App = () =>
{
    return (
        <div id = "container-holder">
            <Container title={"to do"}/>
            <Container title={"in progress"}/>
            <Container title={"done"}/>
        </div>
    );
}

export default App;