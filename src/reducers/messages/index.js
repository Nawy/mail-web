import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    sendLetterData: null,
    isSendProcessing: false,
    sendError: null,

    messages: [],
    getMessageError: null,
    isMessageLoading: false
};

const messages = (state = INITIAL_STATE, action) => {

    if (action.type === actionTypes.SEND_LETTER + '_STARTED') {
        return {...state, isSendProcessing: true, error: null};
    }
    if (action.type === actionTypes.SEND_LETTER + '_SUCCESS') {
        return {...state, isSendProcessing: false, sendLetterData: action.payload, sendError: null};
    }
    if (action.type === actionTypes.SEND_LETTER + '_FAILURE') {
        return {...state, isSendProcessing: false, sendLetterData: null, sendError: action.payload};
    }

    if (action.type === actionTypes.GET_CHAT_MESSAGES + '_STARTED') {
        return {...state, isMessageLoading: true, error: null};
    }
    if (action.type === actionTypes.GET_CHAT_MESSAGES + '_SUCCESS') {
        return {...state, isMessageLoading: false, messages: action.payload, getMessageError: null};
    }
    if (action.type === actionTypes.GET_CHAT_MESSAGES + '_FAILURE') {
        return {...state, isMessageLoading: false, messages: null, getMessageError: action.payload};
    }

    return state;
};

export default messages;