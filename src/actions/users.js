import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../common/reduxHelper";

export const checkUserName = (userName) => {
    return commonGetAction(api.CHECK_USER_NAME(userName), null, actionTypes.CHECK_USER_NAME);
};
