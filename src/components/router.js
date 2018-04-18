import React, {Component} from 'react';
import Write from "./pages/write";
import Letters from "./pages/letters";
import Choose from "../containers/choose";
import {Route, Switch} from "react-router-dom";

const Router = (props) => {
    if (!props.isAuthorized) return <Choose/>;
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Choose}/>
                <Route exact path='/write' component={Write}/>
                <Route exact path='/letters' component={Letters}/>
            </Switch>
        </main>
    );
};

export default Router;