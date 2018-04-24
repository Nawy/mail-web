
const api = {
    URL: 'http://localhost:3000/api',

    CHECK_USER_NAME: userName => `/user/${userName}/name`,
    GET_CHAT_NAMES: userName => `/user/${userName}/chats`,
    GET_CHAT_MESSAGES: (userName,chatName) => `/user/${userName}/chat/${chatName}`,
    GET_SESSION_USER_NAME: `/user`,
    LOGIN: '/login',
    CREATE_NEW_USER: '/user'
};

export default api;