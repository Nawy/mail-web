import {connect} from "react-redux";
import {getSessionUserNameAction, logoutAction2} from "../actions/auth";
import Settings from "../components/settings/Settings";

const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
        logout: () => dispatch(logoutAction2())
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)