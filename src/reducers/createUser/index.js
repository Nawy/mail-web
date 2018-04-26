const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null
};

export const createUserSuccessReducer = (actionName, action, state = INITIAL_STATE) => {
    return {...state, isLoading: false, data: action.payload, error: null,};
};