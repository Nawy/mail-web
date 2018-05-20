import {connect} from "react-redux";
import ChatList from "../components/chats/ChatList";
import {getSpamChats} from "../actions/chats";
import {hideAllForms, showSettingsForm} from "../actions/windows";

const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChats: () => dispatch(getSpamChats()),
        showSettingsForm: () => dispatch(showSettingsForm()),
        hideAllWindows: () => dispatch(hideAllForms())
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data,
        spamChats: state.spamChats,
        isSettingsWindowVisible: state.windows.isSettingsWindowOpen
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)