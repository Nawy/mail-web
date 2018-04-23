import {connect} from "react-redux";
import {getSessionUserNameAction, loginAction} from "../actions/auth";
import Auth from "../components/Auth";


const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
        login: (login, password) => dispatch(loginAction(login, password))
    }
};

const mapStateToProps = (state) => {
    return {
        sessionNameState: state.sessionUserName,
        isLoginError: state.login.error !== null
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)