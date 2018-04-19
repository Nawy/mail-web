import React, {Component} from 'react';
import Write from "./pages/Write";
import Letters from "./pages/Letters";
import Choose from "../containers/Choose";
import {Route, Switch} from "react-router-dom";

const Router = (props) => {
    //if (!props.isAuthorized) return <Choose/>;
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