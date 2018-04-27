import {connect} from "react-redux";
import Letters from "../components/pages/Letters";
import isNull from 'lodash/isNull'
import {getSpamChatNames} from "../actions/chats";


const mapDispatchToProps = (dispatch) => {
    return {
        getSpamChatNames: (userName) => dispatch(getSpamChatNames(userName))
    }
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
        isAuthorized: !isNull(state.sessionUserName.data)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters)