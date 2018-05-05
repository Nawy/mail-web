import {connect} from "react-redux";
import Address from "../components/contacts/Address";
import {chooseChat, getChatMessages} from "../actions/chats";

const mapDispatchToProps = (dispatch) => {
    return {
        getChatMessages: (address) => dispatch(getChatMessages(address)),
        chooseChat: (address) => dispatch(chooseChat(address))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        selectedAddress: state.chooseChat.address
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Address)