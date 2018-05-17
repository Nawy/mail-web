import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    sendLetterData: null,
    isSendProcessing: false,
    sendError: null,
};

const messages = (state = INITIAL_STATE, action) => {

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

    return state;
};

export default messages;