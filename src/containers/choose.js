import {connect} from "react-redux";
import {checkUserName} from "../actions/checkUserName";
import Choose from "../components/pages/choose";

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserName: (name) => {
            dispatch(checkUserName(name))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose)