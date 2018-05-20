import {connect} from "react-redux";
import ChatList from "../components/chats/ChatList";
import {getSpamChatNames} from "../actions/chats";
import {hideAllForms, setSettingWindowsVisibility, showSettingsForm} from "../actions/windows";

const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: () => dispatch(getSpamChatNames()),
        showSettingsForm: () => dispatch(showSettingsForm()),
        hideAllWindows: () => dispatch(hideAllForms())
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data,
        spamChatNames: state.getSpamChatNames,
        isSettingsWindowVisible: state.windows.isSettingsWindowOpen
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)