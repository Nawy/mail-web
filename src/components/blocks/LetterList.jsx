import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const LetterList = () => (
    <div>
        <div className="letter-card">
            <TextareaAutosize placeholder='Текст письма'/>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <div className="letter-card-header">
                    <span className="mr-auto p-2">Today</span>
                    <span className="p-2">me</span>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        <div className="letter-card-sender">
            <div className="card-block">
                <div className="card-header">
                    Featured
                </div>
                <div className="d-flex justify-content-end">
                    <span className="mr-auto p-2">Yesterday</span>
                    <span className="p-2">me</span>
                </div>
                <p className="card-text">Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the
                    Libyan embassy on St James's Square in London. She had been deployed as a constable of the
                    Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the
                    protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding
                    eleven Libyans. The inquest found that she was "killed by a bull</p>
            </div>
        </div>
    </div>
);

export default LetterList;

