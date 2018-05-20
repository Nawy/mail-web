import React, {Component} from 'react';
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

    render() {
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="left-main-col">
                    {this.props.isAuthorized ? <ChatList/> : <Auth/>}
                </div>
                <div className="right-main-col">
                    {this.props.isAuthorized ? <LetterList/> : <Greetings/>}
                </div>
            </div>
        </div>);
    }
}

export default MainPage;

