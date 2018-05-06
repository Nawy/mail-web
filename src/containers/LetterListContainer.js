import {connect} from "react-redux";
import isNull from 'lodash/isNull'
import LetterList from "../components/letters/LetterList";

const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        session: state.userSession.data,
        messages: state.getChatMessages
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterList)