import {connect} from "react-redux";
import Letters from "../components/pages/Letters";
import isNull from 'lodash/isNull'


const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        isAuthorized: !isNull(state.sessionUserName.data)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters)