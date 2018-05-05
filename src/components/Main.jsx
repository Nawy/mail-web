import React from 'react';
import Letters from "../containers/LettersContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const CustomRouter = () => {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Letters}/>
                </Switch>
            </BrowserRouter>
        </main>
    );
};

export default CustomRouter;