import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../util/reduxHelper";
import {loginPost} from "../repository/apiClient";

export const getSessionUserNameAction =
    () => commonGetAction(api.GET_SESSION_USER_NAME, null, actionTypes.GET_SESSION_USER_NAME);

export const loginAction =
    (login, password) => dispatch => {
        const actionName = actionTypes.LOGIN;
        dispatch({type: actionName + '_STARTED'});
        loginPost(
            login, password,
            data => {
                dispatch({type: actionName + '_SUCCESS', payload: data});
                dispatch(getSessionUserNameAction());
            },
            error => dispatch({type: actionName + '_FAILURE', payload: error, error: true})
        )
    };