import React, {PureComponent} from 'react';
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import ChatName from '../../containers/ChatNameContainer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from "@fortawesome/fontawesome-free-solid/faUserCircle";
import faTimesCircle from "@fortawesome/fontawesome-free-solid/faTimesCircle";
import {ChatLoader} from "../../util/Loader";
import moment from "moment";

class ChatList extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSpamChats();
    }

    getChats = (spamChats) => {
        if (spamChats.isLoading && isNull(spamChats.data)) return <ChatLoader/>;
        const spamChatsData = spamChats.data;
        if (isEmpty(spamChatsData)) return <p className="text-center">Нет контактов</p>;
        spamChatsData.sort((leftChat, rightChat) => {
            const leftChatDate = moment(leftChat.lastDeliveryDate, "YYYY-MM-DD'T'HH:mm:ss.SSS");
            const rightChatDate = moment(rightChat.lastDeliveryDate, "YYYY-MM-DD'T'HH:mm:ss.SSS");
            return rightChatDate.diff(leftChatDate);
        });
        return spamChatsData.map((chat) => <ChatName chat={chat}/>);
    };

    handleClickSettings = () => {
        if (this.props.isSettingsWindowVisible) {
            this.props.hideAllWindows();
        } else {
            this.props.showSettingsForm();
        }
    };

    userInfo = (
        <button type="button" className="btn-rounded btn-block btn-user-info" onClick={() => this.handleClickSettings()}>
            <FontAwesomeIcon icon={faUserCircle}/> {this.props.session.name}
        </button>
    );

    userInfoSelected = (
        <button type="button" className="btn-rounded-selected btn-block" onClick={() => this.handleClickSettings()}>
            <FontAwesomeIcon icon={faTimesCircle}/> {this.props.session.name}
        </button>
    );

    getUserInfo = () => this.props.isSettingsWindowVisible ? this.userInfoSelected : this.userInfo;

    render() {
        console.log("CHATS IS REWRITTEN");
        return (
            <div>
                {this.getUserInfo()}
                <div className="address-card">
                    {this.getChats(this.props.spamChats)}
                </div>
            </div>
        );
    }
}

export default ChatList;

