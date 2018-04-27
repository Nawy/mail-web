
const api = {
    URL: '/api',

    CHECK_USER_NAME: userName => `/user/${userName}/name`,
    GET_CHAT_NAMES: userName => `/user/${userName}/chats`,
    GET_SPAM_CHAT_NAMES:  `/mailbox/spam/chat/names`,
    GET_CHAT_MESSAGES: (userName,chatName) => `/user/${userName}/chat/${chatName}`,
    GET_SESSION_USER_NAME: `/user`,
    LOGIN: '/login',
    CREATE_NEW_USER: '/user'
};

export default api;