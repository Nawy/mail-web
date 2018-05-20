import {connect} from "react-redux";
import ChatName from "../components/chats/ChatName";
import {getChatMessages} from "../actions/chats";
import {withRouter} from "react-router-dom";
import {hideAllForms} from "../actions/windows";

const mapDispatchToProps = (dispatch) => {
    return {
        //chatMessages: (address) => dispatch(getChatMessages(address)),
        hideAllWindows: () => dispatch(hideAllForms())
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        oldUrl: (state.routing.locationBeforeTransitions || ownProps.location).pathname
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatName))