import {combineReducers} from 'redux'
import actionTypes from '../actions/actionTypes';
import windows from "./customReducers/windows";
import {routerReducer} from 'react-router-redux'
import {commonHttpReducer, commonWebSocketReducer} from "./customReducers/commonReducers";

const appReducer = combineReducers({
    routing: routerReducer,
    login: (state, action) => commonHttpReducer(actionTypes.LOGIN, action, state),
    logout: (state, action) => commonHttpReducer(actionTypes.LOGOUT, action, state),
    createNewUser: (state, action) => commonHttpReducer(actionTypes.CREATE_NEW_USER, action, state),
    userName: (state, action) => commonHttpReducer(actionTypes.CHECK_USER_NAME, action, state),
    userSession: (state, action) => commonHttpReducer(actionTypes.GET_SESSION_USER_NAME, action, state),
    spamChats: (state, action) => commonHttpReducer(actionTypes.GET_SPAM_CHATS, action, state),
    chatMessages: (state, action) => commonHttpReducer(actionTypes.CHAT_MESSAGES, action, state),
    newChatMessagesAmount: (state, action) => commonWebSocketReducer(actionTypes.CHAT_MESSAGES_AMOUNT_RECEIVED, action, state),
    chatNewMessages: (state, action) => commonWebSocketReducer(actionTypes.CHAT_MESSAGES_RECEIVED, action, state),
    windows
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS' || action.type === 'CLEAR_REDUX_STATE') {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;