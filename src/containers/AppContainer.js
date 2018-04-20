import {connect} from "react-redux";
import App from "../components/App";

const mapDispatchToProps = () => {
    return {}
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(App)