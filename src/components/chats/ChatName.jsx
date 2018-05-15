import React, {Component} from 'react';
import {history} from "../Router";

class ChatName extends Component {

    constructor(props) {
        super(props);
    }

    buttonAddress = this.props.address;

    changeRoute = () => {
        history.push(this.buttonAddress);
        this.props.chatMessages(this.buttonAddress);
    };

    unselectedButton =
        <button type="button" className="btn-address" onClick={() => this.changeRoute()}>{this.buttonAddress}</button>;

    selectedButton = <button type="button" className="btn-address-selected">{this.buttonAddress}</button>;


    render() {
        const currentAddress = history.location.pathname;
        return "/" + this.buttonAddress === currentAddress ? this.selectedButton : this.unselectedButton;
    }
}

export default ChatName;