import {combineReducers} from 'redux'
import {commonReducer} from "../util/reduxHelper";
import actionTypes from '../actions/actionTypes';

// custom
import chooseMenu from './chat'
import messages from './messages'
import newLetterForm from './newLetterForm'

const appReducer = combineReducers({
    chooseMenu,
    newLetterForm,
    messages,
    login: (state, action) => commonReducer(actionTypes.LOGIN, action, state),
    logout: (state, action) => commonReducer(actionTypes.LOGOUT, action, state),
    createNewUser: (state, action) => commonReducer(actionTypes.CREATE_NEW_USER, action, state),
    userName: (state, action) => commonReducer(actionTypes.CHECK_USER_NAME, action, state),
    userSession: (state, action) => commonReducer(actionTypes.GET_SESSION_USER_NAME, action, state),
    getChatNames: (state, action) => commonReducer(actionTypes.GET_CHAT_NAMES, action, state),
    getSpamChatNames: (state, action) => commonReducer(actionTypes.GET_SPAM_CHAT_NAMES, action, state),
    getChatMessages: (state, action) => commonReducer(actionTypes.GET_CHAT_MESSAGES, action, state)
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
        state = undefined
    }
    if (action.type.substr(action.type.length - 8) === "_FAILURE") {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;