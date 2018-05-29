import React, {Component} from 'react';
import LetterList from '../containers/LetterListContainer'
import ChatList from '../containers/ChatListContainer'
import "../style/letters.scss"
import Auth from "../containers/AuthContainer";
import {ChatLoader, MessageLoader} from "../util/Loader";

const Greetings = () => (
    <div className="letter-card">
        <div className="d-flex justify-content-center">
            <p>"Быстрая и легкая почта."</p>
        </div>
    </div>
);


class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.isLoading && !this.props.isAuthorized && !this.props.isErrorAuth) {
            this.props.getSessionUserName();
        }
    }

    getChatListOrAuth = () => {
        return this.props.isLoading ? <ChatLoader/> :
            this.props.isAuthorized ? <ChatList/> :
                this.props.isErrorAuth ? <Auth/> : <ChatLoader/>
    };

    getMessagesOrGreeting = () => this.props.isLoading ? <MessageLoader/> :
        this.props.isAuthorized ? <LetterList/> :
            this.props.isErrorAuth ? <Greetings/> : <MessageLoader/>;

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="left-main-col">
                        {this.getChatListOrAuth()}
                    </div>
                    <div className="right-main-col">
                        {this.getMessagesOrGreeting()}
                    </div>
                </div>
            </div>);
    }
}

export default MainPage;

