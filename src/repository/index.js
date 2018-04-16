
const api = {
    URL: 'http://localhost:8090',
    CHECK_USER_NAME: userName => `/user/${userName}/name`,
    GET_CHAT_NAMES: userName => `/user/${userName}/chats`,
    GET_CHAT_MESSAGES: (userName,chatName) => `/user/${userName}/chat/${chatName}`,
};

export default api;