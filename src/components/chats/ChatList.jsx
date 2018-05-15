import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import ChatName from '../../containers/ChatNameContainer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import {ChatLoader} from "../../util/Loader";

class ChatList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSpamChatNames();
    }

    getChatNames = (spamChatNames) => {
        if (isNull(spamChatNames)) return "";
        if (spamChatNames.isLoading) return <ChatLoader/>;
        const spamChatNamesData = spamChatNames.data;
        if (isEmpty(spamChatNamesData)) return <p className="text-center">Нет контактов</p>;
        return spamChatNamesData.map((chatName) => <ChatName address={chatName}/>);
    };

    handleClickSettings = () => {
        if (this.props.isSettings) {
            this.props.unselectObjectSettings();
        } else {
            this.props.selectObjectSettings();
        }
    };

    userInfo = (
        <button type="button" className="btn-rounded btn-block" onClick={() => this.handleClickSettings}>
            <FontAwesomeIcon icon={faBars}/> {this.props.session.name}
        </button>
    );

    userInfoSelected = (
        <button type="button" className="btn-rounded-selected btn-block" onClick={() => this.handleClickSettings}>
            <FontAwesomeIcon icon={faBars}/> {this.props.session.name}
        </button>
    );

    getUserInfo = () => this.props.isSettings ? this.userInfoSelected : this.userInfo;

    render() {
        console.log("CHATS IS REWRITTEN");
        return (
            <div>
                {this.getUserInfo()}
                <div className="address-card">
                    {this.getChatNames(this.props.spamChatNames)}
                </div>
            </div>
        );
    }
}

export default ChatList;

