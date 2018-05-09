import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    isNewLetter: true,
    isReply: false
};

const newLetterForm = (state = INITIAL_STATE, action) => {
    if (action.type === actionTypes.SHOW_NEW_LETTER_FORM) {
        return {
            ...state,
            isNewLetter: true,
            isReply: false
        };
    }
    if (action.type === actionTypes.SHOW_REPLY_LETTER_FORM) {
        return {
            ...state,
            isNewLetter: false,
            isReply: true
        };
    }
    if (action.type === actionTypes.HIDE_ALL_WRITE_LETTER_FORM) {
        return {
            ...state,
            isNewLetter: false,
            isReply: false
        };
    }
    return state;
};

export default newLetterForm;