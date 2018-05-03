import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../util/reduxHelper";

export const chooseChat = (address) => {
    return {type: actionTypes.CHOOSE_CHAT, payload: address}
};

export const getChatNames = (userName) =>
    commonGetAction(api.GET_CHAT_NAMES(userName), null, actionTypes.GET_CHAT_NAMES);

export const getSpamChatNames = () =>
    commonGetAction(api.GET_SPAM_CHAT_NAMES, null, actionTypes.GET_SPAM_CHAT_NAMES);

export const getChatMessages = (address) =>
    commonGetAction(api.GET_CHAT_MESSAGES(address), null, actionTypes.GET_CHAT_MESSAGES);
