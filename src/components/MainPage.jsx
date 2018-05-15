import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import LetterList from '../containers/LetterListContainer'
import ChatList from '../containers/ChatListContainer'
import "../style/letters.scss"
import Auth from "../containers/AuthContainer";

const Greetings = () => (
    <div className="letter-card">
        <div className="d-flex justify-content-center">
            <p>"Быстрая и легкая почта."</p>
        </div>
    </div>
);

class MainPage extends Component {

    componentDidMount() {
        if (!isEmpty(this.props.match.params) && !isNull(this.props.match.params['email'])) {
            const email = this.props.match.params['email'];
            this.props.chatMessages(email);
        }
    }

    render() {
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="left-main-col">
                    {this.props.isAuthorized ? <ChatList id={this.props.match.params['email']}/> : <Auth/>}
                </div>
                <div className="right-main-col">
                    {this.props.isAuthorized ? <LetterList/> : <Greetings/>}
                </div>
            </div>
        </div>);
    }
}

export default MainPage;

