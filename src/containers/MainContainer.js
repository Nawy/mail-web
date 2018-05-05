import {connect} from "react-redux";
import Main from "../components/Main";
import {withRouter} from "react-router-dom";


const mapDispatchToProps = () => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userSession.data !== null
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))