import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./header";
import TextareaAutosize from "react-textarea-autosize";


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
        <Route exact path='/' component={HomePage}/>
    </div>
);

const HomePage = () => (
    <div className="row">
        <div className="row">
            <h1>Заголовок письма</h1>
            <TextareaAutosize>Write some message</TextareaAutosize>
        </div>

        <div className="row">
            <button className="btn btn-outline-primary"><b>SEND</b></button>
        </div>
    </div>

);

export default App;