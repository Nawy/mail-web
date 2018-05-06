import {connect} from "react-redux";
import {showNewLetterForm, showReplyForm, hideAllWriteLetterForms} from '../actions/newLetters'
import LetterButtonGroup from "../components/letters/LetterButtonGroup";

const mapDispatchToProps = (dispatch) => {
    return {
        showNewLetterForm: () => dispatch(showNewLetterForm()),
        showReplyForm: () => dispatch(showReplyForm()),
        hideAllWriteLetterForms: () => dispatch(hideAllWriteLetterForms())
    }
};

const mapStateToProps = (state) => {
    return {
        newLetterForm: state.newLetterForm
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterButtonGroup)