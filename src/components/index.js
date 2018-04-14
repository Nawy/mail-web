import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./Header";
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
    <div>
        <Route exact path='/' component={HomePage}/>
    </div>
);

const HomePage = () => (
    <div>
    <TextareaAutosize>Write some message</TextareaAutosize>
    </div>
);

export default App;