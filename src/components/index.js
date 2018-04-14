import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Button, Container} from "reactstrap";
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
        <div style={{marginLeft: '10%', marginTop: '5%'}}>
            <TextareaAutosize placeholder={"Title"} style={{fontSize: '24px'}}/>
            <TextareaAutosize placeholder={"Author"}/>
            <TextareaAutosize placeholder={"Write your message ..."}/>
            <Button color="secondary" style={{marginTop: '5%'}}>Send</Button>
        </div>

    </div>
);

export default App;