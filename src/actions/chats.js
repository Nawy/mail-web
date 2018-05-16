import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {
    commonGetAction, commonGetActionAfterSuccess, commonGetWithMethodAfterSuccess,
    commonPostWithActionAfterSuccess
} from "../util/reduxHelper";
import {history} from "../components/Router";

export const sendLetter = (address, text) =>
    commonPostWithActionAfterSuccess(
        api.SEND_LETTER,
        {address: address, text: text, htmlText: text},
        actionTypes.SEND_LETTER,
        () => getChatNamesAndSelect(address)
    );

export const getChatNamesAndSelect = (address) =>
    commonGetActionAfterSuccess(
        api.GET_SPAM_CHAT_NAMES,
        null,
        actionTypes.GET_SPAM_CHAT_NAMES,
        () => getChatMessagesAndSelect(address)
    );

export const getSpamChatNames = () =>
    commonGetAction(api.GET_SPAM_CHAT_NAMES, null, actionTypes.GET_SPAM_CHAT_NAMES);

export const getChatMessages = (address) =>
    commonGetAction(api.GET_CHAT_MESSAGES(address), null, actionTypes.GET_CHAT_MESSAGES);

export const getChatMessagesAndSelect = (address) =>
    commonGetWithMethodAfterSuccess(
        api.GET_CHAT_MESSAGES(address),
        null,
        actionTypes.GET_CHAT_MESSAGES,
        () => history.push(address)
        //() => setSettingWindowVisible(address, false)
    );
