import React, {Component} from 'react';
import LetterList from '../letters/LetterList'
import AddressList from '../contacts/AddressList'
import "../../style/letters.scss"
import Auth from "../../containers/AuthContainer";

const Letters = (props) => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="left-main-col">
                {props.isAuthorized ? <AddressList/> : <Auth/>}
            </div>
            <div className="right-main-col">
                <LetterList/>
            </div>
        </div>
    </div>
);

export default Letters;

