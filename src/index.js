import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import App from './components/index';
import 'bootstrap/dist/css/bootstrap.css';
import './style/MainStyle.scss';

let middleware = [thunkMiddleware, logger];
const defaultStore = {};
const store = createStore(reducers, defaultStore, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        </AppContainer>
    </Provider>,
    document.getElementById("root")
);