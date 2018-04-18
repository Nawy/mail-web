import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction} from "../util/reduxHelper";

export const checkUserName =
    (userName) => commonGetAction(api.CHECK_USER_NAME(userName), null, actionTypes.CHECK_USER_NAME);

