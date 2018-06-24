import {connect} from "react-redux";
import WebSocketComponent from "../components/WebSocketComponent";
import {withRouter} from "react-router-dom";
import {chatMessagesAmountReceived, chatMessagesReceived} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        chatMessagesAmountReceived : (data) => chatMessagesAmountReceived(data),
        chatMessagesReceived: (messages) => chatMessagesReceived(messages)
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUrl: (state.routing.locationBeforeTransitions || ownProps.location).pathname,
        userName: state.userName.data,
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebSocketComponent))