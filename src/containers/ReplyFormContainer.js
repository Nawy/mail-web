import {connect} from "react-redux";
import {sendLetter} from '../actions/chats'
import ReplyForm from "../components/letters/forms/ReplyForm";


const mapDispatchToProps = (dispatch) => {
    return {
        sendLetter: (address, text) => dispatch(sendLetter(address, text))
    }
};

const mapStateToProps = (state) => {
    return {
        recipient: state.messages.currentAddress
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm)