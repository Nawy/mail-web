import {connect} from "react-redux";
import isNull from 'lodash/isNull'
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
        newLetterForm: state.newLetterForm,
        isEmailSelected: !isNull(state.messages.currentAddress)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterButtonGroup)