import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./header";
import Router from "./router"


const App = () => (
    <BrowserRouter>
        <Container>
            <Header/>
            <Router/>
        </Container>
    </BrowserRouter>
);

export default App;