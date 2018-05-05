import {connect} from "react-redux";
import Address from "../components/contacts/Address";
import {chooseMenu, getChatMessages} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        getChatMessages: (address) => dispatch(getChatMessages(address)),
        chooseMenu: (address) => dispatch(chooseMenu(address, false))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        selectedAddress: state.chooseMenu.address
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Address)