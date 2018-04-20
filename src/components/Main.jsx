import React from 'react';
import Write from "./pages/Write";
import Letters from "./pages/Letters";
import Choose from "../containers/Choose";
import {Route, Switch, BrowserRouter} from "react-router-dom";

const CustomRouter = () => {
    //if (!props.isAuthorized) return <Choose/>;
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Choose}/>
                    <Route exact path='/write' component={Write}/>
                    <Route exact path='/letters' component={Letters}/>
                </Switch>
            </BrowserRouter>
        </main>
    );
};

export default CustomRouter;