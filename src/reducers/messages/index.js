import actionTypes from "../../actions/actionTypes";
import isNull from "lodash/isNull"
import moment from "moment"

const INITIAL_STATE = {
    sendLetterData: null,
    isSendProcessing: false,
    sendError: null,

    isSelectedSettings: false,
    selectedAddress: null,

    messages: [],
    getMessageError: null,
    isMessageLoading: false
};

const getMyInstantMessage = (address, text) => {
    return {
        address: address,
        direction: "OUTBOX",
        text: text,
        htmlText: text,
        time: moment().format("YYYY-MM-DD'T'HH:mm:ss.SSS")
    }
};

const messages = (state = INITIAL_STATE, action) => {

    if (action.type === actionTypes.SELECT_OBJECT) {
        return {
            ...state,
            selectedAddress: isNull(action.payload.address) ? state.selectedAddress : action.payload.address,
            isSelectedSettings: action.payload.isSettings,
        };
    }

    if (action.type === actionTypes.SEND_LETTER + '_STARTED') {
        return {
            ...state,
            isSendProcessing: true,
            isSelectedSettings: false,
            error: null
        };
    }
    if (action.type === actionTypes.SEND_LETTER + '_SUCCESS') {
        return {...state, isSendProcessing: false, sendError: null};
    }
    if (action.type === actionTypes.SEND_LETTER + '_FAILURE') {
        return {...state, isSendProcessing: false, sendError: action.payload};
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