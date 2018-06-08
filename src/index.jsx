import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import App from './containers/AppContainer'
// style
import 'bootstrap/dist/css/bootstrap.css';
import './style/theme.scss';
import {syncHistoryWithStore} from "react-router-redux";
import {createBrowserHistory} from "history";

let middleware = [thunkMiddleware, logger];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const defaultStore = {};
export const store = createStore(reducers, defaultStore, applyMiddleware(...middleware));
export const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        </AppContainer>
    </Provider>,
    document.getElementById("root")
);