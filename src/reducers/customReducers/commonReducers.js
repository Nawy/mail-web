const HTTP_INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null
};

export const commonHttpReducer = (actionName, action, state = HTTP_INITIAL_STATE) => {
    switch (action.type) {
        case actionName + '_STARTED':
            return {...state, isLoading: true, error: null};
        case actionName + '_SUCCESS':
            return {...state, isLoading: false, data: action.payload, error: null};
        case actionName + '_FAILURE':
            return {...state, isLoading: false, data: null, error: action.payload};
        case actionName + '_CLEAR':
            return {...state, isLoading: false, data: null, error: null};
        default:
            return state;
    }
};

const WEBSOCKET_INITIAL_STATE = {
    data: null
};

export const commonWebSocketReducer = (actionName, action, state = WEBSOCKET_INITIAL_STATE) => {
    if (action.type === actionName) {
        return {...state, data: action.payload}
    } else {
        return state;
    }
};