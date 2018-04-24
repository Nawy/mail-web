import {connect} from "react-redux";
import {getSessionUserNameAction, loginAction} from "../actions/auth";
import Auth from "../components/Auth";
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
    return {
        sessionNameState: state.sessionUserName,
        isLoginError: state.login.error !== null,
        isLoginExists: state.checkUserName.error === null
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)