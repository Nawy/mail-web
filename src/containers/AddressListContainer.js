import {connect} from "react-redux";
import AddressList from "../components/contacts/AddressList";
import {chooseMenu, getSpamChatNames, selectObject} from "../actions/chats";

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
        address: state.messages.selectedAddress,
        isSettings: state.messages.isSelectedSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)