import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction, commonPostAction} from "../util/reduxHelper";

export const selectObject = (address, isSettings) => {
    return {type: actionTypes.SELECT_OBJECT, payload: {address: address, isSettings: isSettings}}
};

export const sendLetter = (address, text) =>
    commonPostAction(api.SEND_LETTER, {address: address, text: text, htmlText: text}, actionTypes.SEND_LETTER);

export const getChatNames = (userName) =>
    commonGetAction(api.GET_CHAT_NAMES(userName), null, actionTypes.GET_CHAT_NAMES);

export const getSpamChatNames = () =>
    commonGetAction(api.GET_SPAM_CHAT_NAMES, null, actionTypes.GET_SPAM_CHAT_NAMES);

export const getChatMessages = (address) =>
    commonGetAction(api.GET_CHAT_MESSAGES(address), null, actionTypes.GET_CHAT_MESSAGES);
