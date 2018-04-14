import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./header";
import Choose from "./choose";
import Write from "./write";
// // import TextareaAutosize from "react-textarea-autosize";
// import TextareaAutosize from "react-textarea-autosize"


const App = () => (
    <BrowserRouter>
        <Container>
            <Header/>
            <Main/>
        </Container>
    </BrowserRouter>
);

const Main = () => (
    <div className="container">
        <Route exact path='/' component={Choose}/>
        <Route exact path='/write' component={Write}/>
    </div>
);

export default App;