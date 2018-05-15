import {connect} from "react-redux";
import ChatList from "../components/chats/ChatList";
import {getSpamChatNames, selectObject} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: () => dispatch(getSpamChatNames()),
        selectObjectSettings: () => dispatch(selectObject(null, true)),
        unselectObjectSettings: () => dispatch(selectObject(null, false))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data,
        spamChatNames: state.getSpamChatNames,
        address: state.messages.currentAddress,
        isSettings: state.messages.isSelectedSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)