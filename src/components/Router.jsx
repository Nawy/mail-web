import React from 'react';
import Letters from "../containers/MainPageContainer";
import {Route, Router, Switch} from "react-router-dom";
import {history} from '../index';


const Router = () => {
    return (
        <main>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Letters}/>
                    <Route exact path='/:email' component={Letters}/>
                </Switch>
            </Router>
        </main>
    );
};

export default Router;