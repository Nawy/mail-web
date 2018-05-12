import {apiGet, apiPost} from "../repository/apiClient";
import {deleteSessionCookie} from "./sessionHolder";
import actionTypes from '../actions/actionTypes'

function removeSessionCookieIfStatusUnauthorized(error, dispatch) {
    if (error.status === 401) deleteSessionCookie();
    dispatch({type:actionTypes.CLEAR_REDUX_STATE})
}

export const commonGetAction = (url, requestParams, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            requestParams,
            response => dispatch({type: actionName + '_SUCCESS', payload: response, request: requestParams}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error,dispatch);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

export const commonPostAction = (url, request, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED', request: request});
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

export const commonPostWithActionAfterSuccess = (url, request, actionName, successAction) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED', request: request});
        apiPost(
            url,
            request,
            response =>{
                dispatch({type: actionName + '_SUCCESS', payload: response, request: request});
                dispatch(successAction(response));
            },
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