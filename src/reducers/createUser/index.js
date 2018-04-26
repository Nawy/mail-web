import actionTypes from '../../actions/actionTypes'
import {loginAction} from "../../actions/auth";

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: null,
    credentials: null
};

export const createUserReducer = (state = INITIAL_STATE, action) => {
    if (action.type === actionTypes.CREATE_NEW_USER + '_STARTED') {
        return {...state, isLoading: true, error: null};
    }
    if (action.type === actionTypes.CREATE_NEW_USER + '_SUCCESS') {
        console.info(state);
        //loginAction(state.)
        return {...state, isLoading: false, data: action.payload, error: null};
    }
    if (action.type === actionTypes.CREATE_NEW_USER + '_FAILURE') {
        return {...state, isLoading: false, data: null, error: action.payload};
    }
    return state;
};