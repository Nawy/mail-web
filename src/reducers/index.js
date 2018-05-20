import {combineReducers} from 'redux'
import {commonReducer} from "../util/reduxHelper";
import actionTypes from '../actions/actionTypes';
import windows from "./customReducers/windows";
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
    routing: routerReducer,
    login: (state, action) => commonReducer(actionTypes.LOGIN, action, state),
    logout: (state, action) => commonReducer(actionTypes.LOGOUT, action, state),
    createNewUser: (state, action) => commonReducer(actionTypes.CREATE_NEW_USER, action, state),
    userName: (state, action) => commonReducer(actionTypes.CHECK_USER_NAME, action, state),
    userSession: (state, action) => commonReducer(actionTypes.GET_SESSION_USER_NAME, action, state),
    spamChats: (state, action) => commonReducer(actionTypes.GET_SPAM_CHATS, action, state),
    chatMessages: (state, action) => commonReducer(actionTypes.CHAT_MESSAGES, action, state),
    windows
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS' || action.type === 'CLEAR_REDUX_STATE') {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;