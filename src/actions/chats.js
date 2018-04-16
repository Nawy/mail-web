import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../common/reduxHelper";

export const getChatNames = (userName) => {
    return commonGetAction(api.GET_CHAT_NAMES(userName), null, actionTypes.GET_CHAT_NAMES);
};

export const getChatMessages = (userName, chatName) => {
    return commonGetAction(api.GET_CHAT_MESSAGES(userName, chatName), null, actionTypes.GET_CHAT_MESSAGES);
};