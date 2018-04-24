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
        if(this.state.username.length > 1) {
            this.props.checkUserName(event.target.value);
        }
    };

    changePassword = (event) => this.setState({password: event.target.value});

    submit = (event) => {
        event.preventDefault();
        if(this.state.isLoginExists) {
            this.props.login(this.state.username, this.state.password);
        } else {
            this.props.createNewUser(this.state.username, this.state.password);
        }
    };

    getAuthButtonName = () => {
        if (this.state.username === "") {
            return "New or Auth"
        }

        if (this.state.isLoginExists) {
            return "Already exists, just log in"
        }

        if (this.state.username.length < 3) {
            return "Continue write name";
        } else if (this.state.password.length < 6) {
            return "Write password for new user"
        }

        return "Create new!";
    };


    render() {
        const authWithPassword = (
            <div className="letter-card">
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

        const sessionNameState = this.props.sessionNameState;
        if (sessionNameState.isLoading) return <Loader width={50} height={50}/>;
        const isNotAuthorized = sessionNameState.data === null;
        if (isNotAuthorized) {
            return authWithPassword;
        }
        const username = sessionNameState.data.name;

        return <h4 className="text-center">Hello {username}!</h4>;
    }
}

export default Auth;