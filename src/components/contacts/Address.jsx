import React, {Component} from 'react';

class Address extends Component {

    constructor(props) {
        super(props);
    }

    getMailsFromAddress = (event) => {
        event.preventDefault();
        this.props.getChatMessages(this.props.address);
        this.props.chooseChat(this.props.address);
    };

    render() {
        return (
            <button type="button" className="btn-address" onClick={this.getMailsFromAddress}>{this.props.address}</button>
        );
    }
}

export default Address;