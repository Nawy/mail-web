import React, {Component} from 'react';
import LetterList from '../letters/LetterList'
import AddressList from '../../containers/AddressListContainer'
import "../../style/letters.scss"
import Auth from "../../containers/AuthContainer";

class Letters extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container">
            <div className="row justify-content-center">
                <div className="left-main-col">
                    {this.props.isAuthorized ? <AddressList/> : <Auth/>}
                </div>
                <div className="right-main-col">
                    <LetterList/>
                </div>
            </div>
        </div>);
    }
}

export default Letters;

