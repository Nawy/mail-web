import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./header/header";
import Router from "../containers/router"


const App = () => (
    <BrowserRouter>
        <Container>
            <Header/>
            <Router/>
        </Container>
    </BrowserRouter>
);

export default App;