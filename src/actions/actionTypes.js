import keyMirror from 'keymirror'

const actionTypes = {

    SEND_LETTER: null,
    CHECK_USER_NAME:null,
    GET_CHAT_NAMES: null,
    GET_SPAM_CHAT_NAMES: null,
    GET_CHAT_MESSAGES: null,
    GET_SESSION_USER_NAME: null,
    LOGIN: null,
    CREATE_NEW_USER: null,
    CHOOSE_CHAT: null
};

export default keyMirror(actionTypes);