import React, {Component} from 'react';
import isNull from 'lodash/isNull'

class Address extends Component {

    constructor(props) {
        super(props);
    }

    getMailsFromAddress = (event) => {
        event.preventDefault();
        this.props.history.push(`/${this.props.address}`);
        this.props.getChatMessages(this.props.address);
        this.props.selectObject(this.props.address);
    };

    commonButton = <button type="button" className="btn-address"
                           onClick={this.getMailsFromAddress}>{this.props.address}</button>;

    selectedButton = <button type="button" className="btn-address-selected">{this.props.address}</button>;


    getButton = (address, selectedAddress) =>
        isNull(selectedAddress) ? this.commonButton : this.getSelectedOrCommonButton(address, selectedAddress);

    getSelectedOrCommonButton = (address, selectedAddress) =>
        address === selectedAddress ? this.selectedButton : this.commonButton;

    render() {
        return this.getButton(this.props.address, this.props.selectedAddress);
    }
}

export default Address;