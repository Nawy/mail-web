import React, {Component} from 'react';
import LetterList from '../blocks/LetterList'
import AddressList from '../blocks/AddressList'
import "../../style/letters.scss"

const Letters = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="left-main-col">
                <AddressList/>
            </div>
            <div className="right-main-col">
                <LetterList/>
            </div>
        </div>
    </div>
);

export default Letters;
