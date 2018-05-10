import React, {Component} from 'react';
import LetterList from '../../containers/LetterListContainer'
import AddressList from '../../containers/AddressListContainer'
import "../../style/letters.scss"
import Auth from "../../containers/AuthContainer";
import Greetings from '../common/Greeting'

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
                    {this.props.isAuthorized ? <LetterList/> : <Greetings />}
                </div>
            </div>
        </div>);
    }
}

export default Letters;

