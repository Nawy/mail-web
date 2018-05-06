import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import Address from '../../containers/AddressContainer'
import shortid from "shortid";
import Loader from "../../util/Loader";
import UserInfo from "../user/UserInfo";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

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
        isEmpty(data) ? <p className="text-center">Нет контактов</p> :
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
        <button type="button" className="btn-userinfo" onClick={this.handleClickSettings}>
            <FontAwesomeIcon icon={faBars}/> {this.props.session.name}
        </button>
    );

    userInfoSelected = (
        <button type="button" className="btn-userinfo-selected">
            <FontAwesomeIcon icon={faBars}/> {this.props.session.name}
        </button>
    );

    getUserInfo = () => this.props.isSettings ? this.userInfoSelected : this.userInfo;

    render() {
        return (
            <div>
                {this.getUserInfo()}
                <div className="address-card">
                    {this.getAddresses(this.props.spamChatNames)}
                </div>
            </div>
        );
    }
}

export default AddressList;

