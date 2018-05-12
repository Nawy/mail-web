import {connect} from "react-redux";
import Letters from "../components/pages/Letters";
import isNull from 'lodash/isNull'


const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        isSettings: state.messages.isSelectedSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters)