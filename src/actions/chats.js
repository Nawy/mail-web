import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {
    commonGetAction,
    commonGetActionAfterSuccess,
    commonGetWithMethodAfterSuccess,
    commonPostWithActionAfterSuccess
} from "../util/reduxHelper";
import {history} from "../";

export const sendLetter = (address, text) =>
    commonPostWithActionAfterSuccess(
        api.SEND_LETTER,
        {address: address, text: text, htmlText: text},
        actionTypes.SEND_LETTER,
        () => getChatsAndSelect(address)
    );

export const getChatsAndSelect = (address) =>
    commonGetActionAfterSuccess(
        api.GET_SPAM_CHATS,
        null,
        actionTypes.GET_SPAM_CHATS,
        () => getChatMessagesAndSelect(address)
    );

export const getSpamChats = () =>
    commonGetAction(api.GET_SPAM_CHATS, null, actionTypes.GET_SPAM_CHATS);

export const getChatMessages = (address) =>
    commonGetAction(api.GET_CHAT_MESSAGES(address), null, actionTypes.CHAT_MESSAGES);

export const clearChatMessages = () => ({type: actionTypes.CHAT_MESSAGES + "_CLEAR"});

export const getChatMessagesAndSelect = (address) =>
    commonGetWithMethodAfterSuccess(
        api.GET_CHAT_MESSAGES(address),
        null,
        actionTypes.CHAT_MESSAGES,
        () => history.push(address.toLowerCase())
    );

export const chatMessagesAmountReceived = (data) => ({type: actionTypes.CHAT_MESSAGES_AMOUNT_RECEIVED, payload: data});

export const chatMessagesReceived = (messages) => ({type: actionTypes.CHAT_MESSAGES_RECEIVED, payload:messages});