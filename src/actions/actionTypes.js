import keyMirror from 'keymirror'

const actionTypes = {

    CLEAR_REDUX_STATE:null,

    SEND_LETTER: null,
    CHAT_MESSAGES: null,

    CHECK_USER_NAME:null,
    GET_CHAT_NAMES: null,
    GET_SPAM_CHATS: null,
    GET_SESSION_USER_NAME: null,
    LOGIN: null,
    LOGOUT: null,

    CREATE_NEW_USER: null,

    SHOW_SETTINGS_FORM:null,
    SHOW_NEW_LETTER_FORM: null,
    SHOW_REPLY_LETTER_FORM: null,
    CLOSE_ALL_WINDOWS: null
};

export default keyMirror(actionTypes);