import {connect} from "react-redux";
import isNull from 'lodash/isNull'
import {showNewLetterForm, showReplyForm, hideAllForms} from '../actions/windows'
import LetterButtonGroup from "../components/letters/LetterButtonGroup";

const mapDispatchToProps = (dispatch) => {
    return {
        showNewLetterForm: () => dispatch(showNewLetterForm()),
        showReplyForm: () => dispatch(showReplyForm()),
        hideAllWindows: () => dispatch(hideAllForms())
    }
};

const mapStateToProps = (state) => {
    return {
        windows: state.windows
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterButtonGroup)