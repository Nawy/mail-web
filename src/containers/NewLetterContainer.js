import {connect} from "react-redux";
import {sendLetter} from '../actions/chats'
import NewLetter from "../components/letters/forms/NewLetter";
import {hideAllWriteLetterForms} from "../actions/newLetters";


const mapDispatchToProps = (dispatch) => {
    return {
        sendLetter: (address, text) => dispatch(sendLetter(address, text)),
        hideAllWriteLetterForms: () => dispatch(hideAllWriteLetterForms())
    }
};

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLetter)