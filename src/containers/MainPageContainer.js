import {connect} from "react-redux";
import MainPage from "../components/MainPage";
import isNull from 'lodash/isNull'
import {getSessionUserNameAction} from "../actions/auth";


const mapDispatchToProps = (dispatch) => {
    return {
        getSessionUserName: () => dispatch(getSessionUserNameAction()),
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        isErrorAuth: !isNull(state.userSession.error),
        isLoadingAuth: state.userSession.isLoading
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)