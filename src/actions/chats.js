import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../util/reduxHelper";

export const getChatNames = (userName) =>
    commonGetAction(api.GET_CHAT_NAMES(userName), null, actionTypes.GET_CHAT_NAMES);

export const getSpamChatNames = (userName) =>
    commonGetAction(api.GET_CHAT_NAMES(userName), null, actionTypes.GET_SPAM_CHAT_NAMES);

export const getChatMessages = (userName, chatName) =>
    commonGetAction(api.GET_CHAT_MESSAGES(userName, chatName), null, actionTypes.GET_CHAT_MESSAGES);
