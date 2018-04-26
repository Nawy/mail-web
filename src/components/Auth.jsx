import React, {Component} from 'react';
import isNull from 'lodash/isNull'
import Loader from "../util/Loader";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.props.getSessionUserName();
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value});
        if (this.state.username.length > 1) {
            this.props.checkUserName(event.target.value);
        }
    };

    changePassword = (event) => this.setState({password: event.target.value});

    submit = (event) => {
        event.preventDefault();
        if (this.props.isLoginExists) {
            this.props.login(this.state.username, this.state.password);
        } else {
            this.props.createNewUser(this.state.username, this.state.password);
        }
    };

    isLogin = () => {
        if (this.props.isUserCreated && !this.props.isAuthorized) {
            this.props.login(this.state.username, this.state.password);
        }
    };

    getAuthButtonName = () =>
        this.state.username === "" ? "New or Auth"
            : this.props.isLoginExists ? "Already exists, just log in"
            : this.state.username.length < 3 ? "Continue write name"
                : this.state.password.length < 6 ? "Write password for new user"
                    : "Create new!";


    render() {
        return (
            <div className="letter-card">
                {this.isLogin()}
                <form className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="login@"
                           onChange={this.changeUsername}/>
                    <input type="password"
                           className="form-control"
                           placeholder="password"
                           onChange={this.changePassword}/>
                    <button type="submit"
                            className="button"
                            disabled={!this.state.username || !this.state.password}
                            onClick={this.submit}>
                        {this.getAuthButtonName()}
                    </button>
                </form>
                {
                    this.props.isLoginError ?
                        <div className="alert alert-danger" role="alert">{this.props.isLoginError}</div>
                        : ''
                }
            </div>
        );
    }
}

export default Auth;