import actionTypes from '../actions/actionTypes'
import api from "../repository/index";
import {commonGetAction, commonPostAction, commonPostWithActionAfterSuccess} from "../util/reduxHelper";
import {loginAction} from "./auth";

export const checkUserName =
    (userName) => commonGetAction(api.CHECK_USER_NAME(userName), null, actionTypes.CHECK_USER_NAME);

export const createNewUser = (username, password) =>
    commonPostWithActionAfterSuccess(
        api.CREATE_NEW_USER,
        {
            name: username,
            password: password
        },
        actionTypes.CREATE_NEW_USER,
        () => loginAction(username, password)
    );