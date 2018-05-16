import keyMirror from 'keymirror'

const actionTypes = {

    CLEAR_REDUX_STATE:null,

    SEND_LETTER: null,
    GET_CHAT_MESSAGES: null,

    CHECK_USER_NAME:null,
    GET_CHAT_NAMES: null,
    GET_SPAM_CHAT_NAMES: null,
    GET_SESSION_USER_NAME: null,
    LOGIN: null,
    LOGOUT: null,

    CREATE_NEW_USER: null,
    SET_WINDOWS_VISIBILITY_STATE: null,

    SHOW_NEW_LETTER_FORM: null,
    SHOW_REPLY_LETTER_FORM: null,
    HIDE_ALL_WRITE_LETTER_FORM: null

};

export default keyMirror(actionTypes);