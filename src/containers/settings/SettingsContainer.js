import {connect} from "react-redux";
import {getSessionUserNameAction, logoutAction} from "../../actions/auth";
import Settings from "../../components/settings/Settings";

const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
        logout: () => dispatch(logoutAction())
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)