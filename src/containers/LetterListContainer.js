import {connect} from "react-redux";
import LetterList from "../components/letters/LetterList";

const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        messages: state.getChatMessages
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterList)