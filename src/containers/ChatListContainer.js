import {connect} from "react-redux";
import ChatList from "../components/chats/ChatList";
import {getSpamChatNames} from "../actions/chats";
import {setSettingWindowsVisibility} from "../actions/windows";

const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: () => dispatch(getSpamChatNames()),
        setSettingWindowVisible: () => dispatch(setSettingWindowsVisibility(true)),
        setSettingsWindowInvisible: () => dispatch(setSettingWindowsVisibility(false))
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