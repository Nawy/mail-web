import React, {Component} from 'react';
import LetterList from '../letters/LetterList'
import AddressList from '../contacts/AddressList'
import "../../style/letters.scss"
import BoxSwitcher from "../contacts/BoxSwitcher";

const Letters = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="left-main-col">
                <BoxSwitcher />
                <AddressList/>
            </div>
            <div className="right-main-col">
                <LetterList/>
            </div>
        </div>
    </div>
);

export default Letters;

