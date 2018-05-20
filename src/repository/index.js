
const api = {
    URL: '/api',

    SEND_LETTER: '/mailbox',
    CHECK_USER_NAME: userName => `/user/${userName}/name`,
    GET_CHAT_NAMES: userName => `/user/${userName}/chats`,
    GET_SPAM_CHATS: '/mailbox/spam/chats',
    GET_CHAT_MESSAGES: (address) => `/mailbox/${address}`,
    GET_SESSION_USER_NAME: `/user`,
    LOGIN: '/login',
    LOGOUT: '/logout',
    CREATE_NEW_USER: '/user'
};

export default api;