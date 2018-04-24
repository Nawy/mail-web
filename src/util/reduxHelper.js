import {apiGet, apiPost} from "../repository/apiClient";
import {deleteSessionCookie} from "./sessionHolder";

function removeSessionCookieIfStatusUnauthorized(error){
    console.log(error);
    if (error.status == 401) deleteSessionCookie();
}

export const commonGetAction = (url, params, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            params,
            data => dispatch({type: actionName + '_SUCCESS', payload: data}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

export const commonPostAction = (url, data, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiPost(
            url,
            data,
            data => dispatch({type: actionName + '_SUCCESS', payload: data}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

export const commonPostActionJson = (url, data, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiPostJson(
            url,
            data,
            data => dispatch({type: actionName + '_SUCCESS', payload: data}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null
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