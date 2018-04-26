import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction, commonPostAction} from "../util/reduxHelper";

export const checkUserName =
    (userName) => commonGetAction(api.CHECK_USER_NAME(userName), null, actionTypes.CHECK_USER_NAME);

export const createNewUser = (username, password) =>
    commonPostAction(
        api.CREATE_NEW_USER,
        {name: username, password: password},
        actionTypes.CREATE_NEW_USER
    );