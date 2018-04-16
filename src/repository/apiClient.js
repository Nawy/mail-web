import request from 'superagent'
import api from "./index";

const getAuthorizedHeader = () => {
    /* const token = auth.getAccessToken();
     if (token !== null) return {
         Authorization: token
     };*/
    return {};
};

export const apiGet = (url, params, success, fail) => {
    return request
        .get(api.URL + url)
        .set(getAuthorizedHeader())
        .query(params)
        .end((err, res) => {
            if (err || !res.ok) {
                if (err)
                    fail(err.response);
                else if (res && res.body)
                    fail(res.body.message);
            } else {
                success(res.body);
            }
        })
};

export const apiPost = (url, data, success, fail) => {
    request
        .post(api.URL + url)
        .send(data)
        .set(getAuthorizedHeader())
        .end((err, res) => {
            if (err || !res.ok) {
                if (err)
                    fail(err.response);
                else if (res && res.body)
                    fail(res.body.message);
            } else {
                success(res.body);
            }
        })
};
