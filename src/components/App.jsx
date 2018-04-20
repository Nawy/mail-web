import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from "./header/Header";
import Main from "../containers/MainContainer"


const App = () => (
    <BrowserRouter>
        <Header/>
        <Main/>
    </BrowserRouter>
);

export default App;