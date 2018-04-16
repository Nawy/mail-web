import actionTypes from '../actions/actionTypes'
import request from 'superagent'

export const checkUserName = (name) => {
    return {
        ype: actionTypes.CHECK_USER_NAME,
        payload: request
            .get(`http:/192.168.1.64:8090/user/${name}/name`)
            .end((err, res) => {
                console.info(err);
                console.info(res);
            })
    }
};