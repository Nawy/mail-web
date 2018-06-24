import {apiGet, apiPost} from "../repository/apiClient";
import {deleteSessionCookie} from "./sessionHolder";
import actionTypes from '../actions/actionTypes'

function removeSessionCookieIfStatusUnauthorized(error, dispatch) {
    if (error.status === 401) {
        deleteSessionCookie();
        dispatch({type: actionTypes.CLEAR_REDUX_STATE})
    }
}

export const commonGetAction = (url, requestParams, actionName) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            requestParams,
            response => dispatch({type: actionName + '_SUCCESS', payload: response, request: requestParams}),
            error => {
                removeSessionCookieIfStatusUnauthorized(error, dispatch);
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

export const commonGetWithMethodAfterSuccess = (url, requestParams, actionName, successMethod) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            requestParams,
            response => {
                dispatch({type: actionName + '_SUCCESS', payload: response, request: requestParams});
                successMethod(response);
            },
            error => {
                removeSessionCookieIfStatusUnauthorized(error, dispatch);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
            }
        )
    }
};

export const commonGetActionAfterSuccess = (url, requestParams, actionName, successAction) => {
    return dispatch => {
        dispatch({type: actionName + '_STARTED'});
        apiGet(
            url,
            requestParams,
            response => {
                dispatch({type: actionName + '_SUCCESS', payload: response, request: requestParams});
                dispatch(successAction(response));
            },
            error => {
                removeSessionCookieIfStatusUnauthorized(error, dispatch);
                dispatch({type: actionName + '_FAILURE', payload: error, error: true});
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
            response => {
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

