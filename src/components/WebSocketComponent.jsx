import React, {Component} from 'react';
import SockJsClient from 'react-stomp';
import api from "../repository/index";

import {isEmpty, isNull} from "lodash";

class WebSocketComponent extends Component {
    constructor(props) {
        super(props);
    }

    sendMessage = (msg) => this.clientRef.sendMessage("/app/all", JSON.stringify(msg));

    render() {
        const wsSourceUrl = window.location.protocol + "//" + window.location.host + api.URL + api.WEB_SOCKET;

        const userName = this.props.userName;
        const chatName = this.props.currentUrl;
        return (
            <div>
                {/* listen all client chats new messages amount*/}
                {isEmpty(userName) ?
                    <SockJsClient url={wsSourceUrl} topics={[`/queue/user/${userName}/chats/messages/amount`]}
                                  onMessage={(msg) => this.props.chatMessagesAmountReceived(msg)}
                                  ref={(client) => this.clientRef = client}
                                  onConnect={() => console.log("MESSAGES AMOUNT WEBSOCKET CONNECTED")}
                                  onDisconnect={() => console.log("MESSAGES AMOUNT WEBSOCKET DISCONNECTED")}/> : ''}

                {/* listen chat new messages*/}
                {isNull(chatName) && isEmpty(userName) ?
                    <SockJsClient url={wsSourceUrl} topics={[`/queue/user/${userName}/chats/${chatName}/messages`]}
                                  onMessage={(msg) => this.props.chatMessagesReceived(msg)}
                                  ref={(client) => this.clientRef = client}
                                  onConnect={() => console.log("NEW MESSAGES WEBSOCKET CONNECTED")}
                                  onDisconnect={() => console.log("NEW MESSAGES WEBSOCKET DISCONNECTED")}/> : ''}

            </div>
        );
    }
}

export default WebSocketComponent;