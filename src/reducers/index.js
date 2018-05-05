import {combineReducers} from 'redux'
import chooseChat from './chat'
import {commonReducer} from "../util/reduxHelper";
import actionTypes from '../actions/actionTypes'

const rootReducer = combineReducers({
    chooseChat,
    sendLetter: (state, action) => commonReducer(actionTypes.SEND_LETTER, action, state),
    login: (state, action) => commonReducer(actionTypes.LOGIN, action, state),
    createNewUser: (state, action) => commonReducer(actionTypes.CREATE_NEW_USER, action, state),
    userName: (state, action) => commonReducer(actionTypes.CHECK_USER_NAME, action, state),
    sessionUserName: (state, action) => commonReducer(actionTypes.GET_SESSION_USER_NAME, action, state),
    getChatNames: (state, action) => commonReducer(actionTypes.GET_CHAT_NAMES, action, state),
    getSpamChatNames: (state, action) => commonReducer(actionTypes.GET_SPAM_CHAT_NAMES, action, state),
    getChatMessages: (state, action) => commonReducer(actionTypes.GET_CHAT_MESSAGES, action, state)
});

export default rootReducer;