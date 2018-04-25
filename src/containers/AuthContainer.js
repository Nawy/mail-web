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

const mapStateToProps = (state) => {
    console.info("Res: " + isNull(state.userName.error));
    return {
        sessionNameState: state.sessionUserName,
        isLoginError: !isNull(state.login.error),
        isLoginExists: isNull(state.userName.error)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)