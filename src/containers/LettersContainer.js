import {connect} from "react-redux";
import Letters from "../components/pages/Letters";
import isNull from 'lodash/isNull'
import {getChatMessages, selectObject} from "../actions/chats";


const mapDispatchToProps = (dispatch) => {
    return {
        getChatMessages: (address) => dispatch(getChatMessages(address)),
        selectObject: (address) => dispatch(selectObject(address, false))
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        isSettings: state.messages.isSelectedSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters)