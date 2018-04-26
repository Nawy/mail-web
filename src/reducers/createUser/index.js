const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null,
    request: null
};

export const createUserSuccessReducer = (actionName, action, state = INITIAL_STATE) => {
    console.info(state.request);
    return {...state, isLoading: false, data: action.payload, error: null};
};