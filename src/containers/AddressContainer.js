import {connect} from "react-redux";
import Address from "../components/contacts/Address";
import {getChatMessages, selectObject} from "../actions/chats";
import {withRouter} from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
    return {
        getChatMessages: (address) => dispatch(getChatMessages(address)),
        selectObject: (address) => dispatch(selectObject(address, false))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.userSession.data,
        selectedAddress: state.messages.selectedAddress
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Address))