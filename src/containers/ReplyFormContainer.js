import {connect} from "react-redux";
import {sendLetter} from '../actions/chats'
import ReplyForm from "../components/letters/forms/ReplyForm";
import {withRouter} from "react-router-dom";


const mapDispatchToProps = (dispatch) => {
    return {
        sendLetter: (address, text) => dispatch(sendLetter(address, text))
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        recipient: (state.routing.locationBeforeTransitions || ownProps.location).pathname.substr(1)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReplyForm))