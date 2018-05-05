import {connect} from "react-redux";
import AddressList from "../components/contacts/AddressList";
import {chooseMenu, getSpamChatNames} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: () => dispatch(getSpamChatNames()),
        chooseMenu: () => dispatch(chooseMenu(null, true))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        spamChatNames: state.getSpamChatNames,
        address: state.chooseMenu.address,
        isSettings: state.chooseMenu.isSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)