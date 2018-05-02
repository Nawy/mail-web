import React, {Component} from 'react';

class Address extends Component {

    constructor(props) {
        super(props);
    }

    getMailsFromAddress = () => {

    };

    render() {
        return (
            <button type="button" className="button" onClick={this.getMailsFromAddress}>{this.props.address}</button>
        );
    }
}

export default Address;