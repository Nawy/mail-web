import React, {Component} from 'react';
import {history} from "../Router";

class ChatName extends Component {

    buttonAddress = this.props.address;

    unselectedButton =
        <button type="button" className="btn-address" onClick={() => history.push(this.buttonAddress)}>
            {this.buttonAddress}
        </button>;

    selectedButton = <button type="button" className="btn-address-selected">{this.buttonAddress}</button>;


    render() {
        const currentAddress = history.location.pathname;
        const isButtonPushed = "/" + this.buttonAddress === currentAddress;
        if (isButtonPushed) this.props.chatMessages(this.buttonAddress);
        return isButtonPushed ? this.selectedButton : this.unselectedButton;
    }
}

export default ChatName;