import {connect} from "react-redux";
import Router from "../components/Router";
import {withRouter} from "react-router-dom";


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.sessionUserName.data !== null
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router))