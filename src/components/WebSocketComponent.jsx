import React,{Component} from 'react';
import SockJsClient from 'react-stomp';
import api from "../repository/index";

class WebSocketComponent extends Component {
    constructor(props) {
        super(props);
    }

    sendMessage = (msg) => {
        this.clientRef.sendMessage("/app/all", JSON.stringify(msg));
    };

    render() {
        const wsSourceUrl = window.location.protocol + "//" + window.location.host + api.URL + api.WEB_SOCKET;
        return (
            <div>
               <SockJsClient url={wsSourceUrl} topics={['/topics/all']}
                              onMessage={(msg) => {console.log("MSG RECEIVED: " + JSON.stringify(msg));}}
                              ref={(client) => {this.clientRef = client}}
                              onConnect={() => {console.log("CONNECTED"); this.sendMessage("fucker");}}
                              onDisconnect={() => {console.log("DISCONNECTED")}}/>
            </div>
        );
    }
}

export default WebSocketComponent;