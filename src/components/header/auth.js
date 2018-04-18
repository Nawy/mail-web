import React, {Component} from 'react';
import Loader from "../../util/Loader";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.props.getSessionUserName();
    }

    changeUsername = (event) => this.setState({username: event.target.value});

    changePassword = (event) => this.setState({password: event.target.value});

    submit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };


    render() {
        const authWithPassword = (
            <div>
                <h4 className="text-center">Авторизуйся USERNAME!</h4>
                <form className="form-inline row justify-content-center">
                    <input type="text"
                           className="form-control mb-2 mr-sm-2 mb-sm-0"
                           placeholder="Ваш логин"
                           onChange={this.changeUsername}/>
                    <input type="password"
                           className="form-control mb-2 mr-sm-2 mb-sm-0"
                           placeholder="Каков пароль?"
                           onChange={this.changePassword}/>
                    <button type="submit"
                            className="btn btn-primary"
                            disabled={!this.state.username || !this.state.password}
                            onClick={this.submit}>OK
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