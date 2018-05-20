import {connect} from "react-redux";
import isNull from 'lodash/isNull'
import LetterList from "../components/letters/LetterList";
import {clearChatMessages, getChatMessages} from "../actions/chats";
import {withRouter} from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
    return {
        getChatMessages: (address) => dispatch(getChatMessages(address)),
        clearChatMessages: () => dispatch(clearChatMessages())
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        windows: state.windows,
        messages: state.chatMessages,
        currentUrl: (state.routing.locationBeforeTransitions || ownProps.location).pathname
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LetterList))