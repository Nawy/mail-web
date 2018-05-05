import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import Address from '../../containers/AddressContainer'
import shortid from "shortid";
import Loader from "../../util/Loader";
import UserInfo from "../user/UserInfo";

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

    handleClickSettings = (event) => {
        event.preventDefault();
        this.props.chooseMenu();
    };

    userInfo = (
        <button type="button" className="btn-address" onClick={this.handleClickSettings}>
            <UserInfo userName={this.props.session.name}/>
        </button>
    );

    userInfoSelected = (
        <button type="button" className="btn-address-selected">
            <UserInfo userName={this.props.session.name}/>
        </button>
    );

    getUserInfo = () => this.props.isSettings ? this.userInfoSelected : this.userInfo;

    render() {
        return (
            <div className="address-card">
                {this.getUserInfo()}
                {this.getAddresses(this.props.spamChatNames)}
            </div>
        );
    }
}

export default AddressList;

