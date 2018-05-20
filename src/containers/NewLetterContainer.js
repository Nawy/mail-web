import {connect} from "react-redux";
import {sendLetter} from '../actions/chats'
import NewLetter from "../components/letters/forms/NewLetter";
import {hideAllForms} from "../actions/windows";


const mapDispatchToProps = (dispatch) => {
    return {
        sendLetter: (address, text) => dispatch(sendLetter(address, text)),
        hideAllWindows: () => dispatch(hideAllForms())
    }
};

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLetter)