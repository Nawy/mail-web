import {connect} from "react-redux";
import isNull from 'lodash/isNull'
import LetterList from "../components/letters/LetterList";

const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: !isNull(state.userSession.data),
        newLetterForm: state.newLetterForm,
        session: state.userSession.data,
        messages: state.getChatMessages,
        isSettings: state.chooseMenu.isSettings
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterList)