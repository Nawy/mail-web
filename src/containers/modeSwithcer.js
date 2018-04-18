import {connect} from "react-redux";
import ModeSwithcer from "../components/header/modeSwitcher";


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.sessionUserName.data !== null
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwithcer)