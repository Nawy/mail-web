import React, {Component} from 'react';

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

    getAuthButtonName = () => {
        console.log("is login exists ", this.props.isLoginExists);
        if (this.state.username === "") return "Войти или создать";
        if (this.props.isLoginExists) return this.state.password.length < 6 ? "Уже существует, введите пароль" : "Войти";
        if (this.state.username.length < 3) return "Продолжайте вводить имя";
        if (this.state.password.length < 6) return "Пароль для нового";
        return "Создать!";
    };


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
                    this.props.loginError ?
                        <div style={{marginTop: 20}} className="alert alert-danger" role="alert">Неправильный
                            пароль</div>
                        : ''
                }
            </div>
        );
    }
}

export default Auth;