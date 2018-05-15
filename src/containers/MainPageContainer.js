import {connect} from "react-redux";
import MainPage from "../components/MainPage";
import isNull from 'lodash/isNull'
import {getChatMessages} from "../actions/chats";


const mapDispatchToProps = (dispatch) => {
    return {
        chatMessages: (address) => dispatch(getChatMessages(address))
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        isSettings: state.messages.isSelectedSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)