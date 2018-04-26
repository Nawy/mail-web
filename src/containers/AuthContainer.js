import {connect} from "react-redux";
import {getSessionUserNameAction, loginAction} from "../actions/auth";
import Auth from "../components/Auth";
import isNull from 'lodash/isNull'
import {checkUserName, createNewUser} from "../actions/users";


const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
        checkUserName: (userName) => dispatch(checkUserName(userName)),
        login: (login, password) => dispatch(loginAction(login, password)),
        createNewUser: (login, password) => dispatch(createNewUser(login, password))
    }
};

function checkIsUserCreated(state) {
    return isNull(state.createNewUser.error) && !isNull(state.createNewUser.data);
}

const mapStateToProps = (state) => {
    return {
        sessionNameState: state.sessionUserName,
        isAuthorized: state.sessionUserName.data !== null,
        isLoginError: !isNull(state.login.error),
        isLoginExists: isNull(state.userName.error),
        isUserCreated: checkIsUserCreated(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)