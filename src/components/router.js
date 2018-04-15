import React, {Component} from 'react';
import Write from "./write";
import Letters from "./letters";
import Choose from "./choose";
import {Route, Switch} from "react-router-dom";

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Choose}/>
            <Route exact path='/write' component={Write}/>
            <Route exact path='/letters' component={Letters}/>
        </Switch>
    </main>
);

export default Router;