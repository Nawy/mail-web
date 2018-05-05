import {connect} from "react-redux";
import Letters from "../components/pages/Letters";
import isNull from 'lodash/isNull'


const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.sessionUserName.data),
        isSettings: state.chooseMenu.isSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters)