import {connect} from "react-redux";
import {checkUserName} from "../actions/users";
import Choose from "../components/pages/Choose";

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserName: (name) => {
            dispatch(checkUserName(name))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.data
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose)