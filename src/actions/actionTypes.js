import keyMirror from 'keymirror'

const actionTypes = {

    SEND_LETTER: null,
    GET_CHAT_MESSAGES: null,

    CHECK_USER_NAME:null,
    GET_CHAT_NAMES: null,
    GET_SPAM_CHAT_NAMES: null,
    GET_SESSION_USER_NAME: null,
    LOGIN: null,
    LOGOUT: null,
    CREATE_NEW_USER: null,
    SELECT_OBJECT: null,

    SHOW_NEW_LETTER_FORM: null,
    SHOW_REPLY_LETTER_FORM: null,
    HIDE_ALL_WRITE_LETTER_FORM: null

};

export default keyMirror(actionTypes);