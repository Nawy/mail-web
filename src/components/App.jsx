import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "./header/Header";
import Router from "../containers/Router"


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Header/>
                    <Router/>
                </Container>
            </BrowserRouter>
        )
    };
}

export default App;