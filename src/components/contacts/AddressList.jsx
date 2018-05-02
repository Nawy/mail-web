import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import Address from './Address'
import shortid from "shortid";
import Loader from "../../util/Loader";

class AddressList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSpamChatNames();
    }

    getAddressesWithIds = (data) => data.map((value) => {
        return {id: shortid.generate(), value: value}
    });

    getAddressesOrEmpty = (data) =>
        isEmpty(data) ? <h4>Пусто</h4> :
            this.getAddressesWithIds(data)
                .map((value) => <Address key={value.id} address={value.value}/>);


    getAddressesOrLoading = (value) => value.isLoading ? <Loader/> :
        this.getAddressesOrEmpty(value.data);

    getAddresses = (value) =>
        isNull(value) ? "" : this.getAddressesOrLoading(value);


    render() {
        return (
            <div className="letter-card">
                <p>{this.props.session.name}@ermolaev.am</p>
                {this.getAddresses(this.props.spamChatNames)}
            </div>);
    }
}

export default AddressList;

