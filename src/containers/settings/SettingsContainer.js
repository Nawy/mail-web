import {connect} from "react-redux";
import {getSessionUserNameAction, logoutAction} from "../../actions/auth";
import Settings from "../../components/settings/Settings";

const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
        logout: () => dispatch(logoutAction())
    }
};

const getIsLogout = (data) => {
    console.info(data);
    return false;
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        isLogout: getIsLogout(state.logout.data)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)