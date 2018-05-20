import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE ={
    isSettingsWindowOpen: false,
    isNewLetterWindowOpen: false,
    isReplyWindowOpen: false,
};

 const windows = (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case(actionTypes.SHOW_SETTINGS_FORM):
             return {...state, isSettingsWindowOpen: true, isNewLetterWindowOpen: false, isReplyWindowOpen: false};
         case(actionTypes.SHOW_NEW_LETTER_FORM):
             return {...state, isSettingsWindowOpen: false, isNewLetterWindowOpen: true, isReplyWindowOpen: false};
         case(actionTypes.SHOW_REPLY_LETTER_FORM):
             return {...state, isSettingsWindowOpen: false, isNewLetterWindowOpen: false, isReplyWindowOpen: true};
         case(actionTypes.CLOSE_ALL_WINDOWS):
             return {...state, isSettingsWindowOpen: false, isNewLetterWindowOpen: false, isReplyWindowOpen: false};
         default:
             return state;
     }
};

export default windows;