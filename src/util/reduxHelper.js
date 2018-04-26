import {apiGet, apiPost} from "../repository/apiClient";
import {deleteSessionCookie} from "./sessionHolder";

function removeSessionCookieIfStatusUnauthorized(error) {
    console.log(error);
    if (error.status === 401) deleteSessionCookie();
}

export const commonGetAction = (url, requestParams, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            requestParams,
            response => dispatch({type: actionName + '_SUCCESS', payload: response, request: requestParams}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

export const commonPostAction = (url, request, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiPost(
            url,
            request,
            response => dispatch({type: actionName + '_SUCCESS', payload: response, request: request}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true, request: request});
            }
        )
    }
};

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null,
    request: null
};

export const commonReducer = (actionName, action, state = INITIAL_STATE) => {
    if (action.type === actionName + '_STARTED') {
        return {...state, isLoading: true, error: null};
    }
    if (action.type === actionName + '_SUCCESS') {
        return {...state, isLoading: false, data: action.payload, error: null};
    }
    if (action.type === actionName + '_FAILURE') {
        return {...state, isLoading: false, data: null, error: action.payload};
    }
    return state;
};

const startedReducer = (actionName, action, state = INITIAL_STATE) => {
    return {...state, isLoading: true, error: null};
};

const successReducer = (actionName, action, state = INITIAL_STATE) => {
    return {...state, isLoading: false, data: action.payload, error: null};
};

const failureReducer = (actionName, action, state = INITIAL_STATE) => {
    return {...state, isLoading: false, data: action.payload, error: null};
};

export const commonReducerFlex =
    (started = startedReducer) => {
        return (success = successReducer) => {
            return (failure = failureReducer) => {
                return (actionName, action, state = INITIAL_STATE) => {
                    if (action.type === actionName + '_STARTED') {
                        started(actionName, action, state);
                    }
                    if (action.type === actionName + '_SUCCESS') {
                        success(actionName, action, state);
                    }
                    if (action.type === actionName + '_FAILURE') {
                        failure(actionName, action, state);
                    }
                    return state;
                }
            }
        }
    }

;