import {connect} from "react-redux";
import AddressList from "../components/contacts/AddressList";
import {getSpamChatNames} from "../actions/chats";


const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: () => dispatch(getSpamChatNames())
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        spamChatNames: state.getSpamChatNames.data
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)