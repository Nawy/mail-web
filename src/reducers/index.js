import {combineReducers} from 'redux'
import {commonReducer} from "../common/reduxHelper";
import actionTypes from '../actions/actionTypes'

const rootReducer = combineReducers({
    checkUserName: (state, action) => commonReducer(actionTypes.CHECK_USER_NAME, action, state),
    getChatNames: (state, action) => commonReducer(actionTypes.GET_CHAT_NAMES, action, state),
    getChatMessages: (state, action) => commonReducer(actionTypes.GET_CHAT_MESSAGES, action, state)
});

export default rootReducer;