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

    getAuthButtonName = () =>
        this.state.username === "" ? "Войти или создать"
            : this.props.isLoginExists ?
                this.state.password.length < 6 ? "Уже существует, введите пароль" : "Войти"
            : this.state.username.length < 3 ? "Продолжайте вводить имя"
                : this.state.password.length < 6 ? "Пароль для нового"
                    : "Создать!";


    render() {
        return (
            <div className="letter-card">
                <form className="common-form-group">
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