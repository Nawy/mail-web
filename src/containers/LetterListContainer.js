import {connect} from "react-redux";
import isNull from 'lodash/isNull'
import LetterList from "../components/letters/LetterList";
import {getChatMessages} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        chatMessages: (address) => dispatch(getChatMessages(address))
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        newLetterForm: state.newLetterForm,
        session: state.userSession.data,
        messages: state.chatMessages,
        isSettingsWindowVisible: state.windows.isSettingsWindowOpen,
        isEmailSelected: !isNull(state.messages.currentAddress)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterList)