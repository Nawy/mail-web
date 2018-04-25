import request from 'superagent'
import api from "./index";

const errorProcessing = (err, res, success, fail) => {
    if (err || !res.ok) {
        if (err)
            fail(err.response);
        else if (res && res.body)
            fail(res.body.message);
    } else {
        success(res.body);
    }
};

export const apiGet = (url, params, success, fail) => {
    return request
        .get(api.URL + url)
        .query(params)
        .end((err, res) => {
            errorProcessing(err, res, success, fail)
        })
};

export const apiPost = (url, data, success, fail) => {
    request
        .post(api.URL + url)
        .send(data)
        .end((err, res) => {
            errorProcessing(err, res, success, fail)
        })
};

export const loginPost = (login, password, success, fail) => {
    request
        .post(api.URL + api.LOGIN)
        .type('form')
        .send({name: login, password: password})
        .end((err, res) => {
            errorProcessing(err, res, success, fail)
        })
};
