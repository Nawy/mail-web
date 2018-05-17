import React, {Component} from 'react';

class ChatName extends Component {

    unselectedButton =
        <button type="button" className="btn-address" onClick={() => this.props.history.push(this.props.address)}>
            {this.props.address}
        </button>;

    selectedButton = <button type="button" className="btn-address-selected">{this.props.address}</button>;

    render() {
        const currentAddress = this.props.route.pathname;
        const isButtonPushed = "/" + this.props.address === currentAddress;
        if (isButtonPushed) this.props.chatMessages(this.props.address);
        return isButtonPushed ? this.selectedButton : this.unselectedButton;
    }
}

export default ChatName;