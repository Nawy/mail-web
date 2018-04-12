import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container, Jumbotron} from "reactstrap";
import Header from "./Header";

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
    <Jumbotron>Hello world!</Jumbotron>
);

export default App;