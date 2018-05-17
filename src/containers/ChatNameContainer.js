import {connect} from "react-redux";
import ChatName from "../components/chats/ChatName";
import {getChatMessages} from "../actions/chats";
import {withRouter} from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
    return {
        chatMessages: (address) => dispatch(getChatMessages(address))
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        route: state.routing.locationBeforeTransitions || ownProps.location
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatName))