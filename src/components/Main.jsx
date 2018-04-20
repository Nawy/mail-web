import React from 'react';
import Letters from "./pages/Letters";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const CustomRouter = () => {
    //if (!props.isAuthorized) return <Choose/>;
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