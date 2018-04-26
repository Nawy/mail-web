import {connect} from "react-redux";
import AddressList from "../components/contacts/AddressList";


const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        session: state.sessionUserName.data,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)