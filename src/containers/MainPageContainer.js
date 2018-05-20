import {connect} from "react-redux";
import MainPage from "../components/MainPage";
import isNull from 'lodash/isNull'


const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)