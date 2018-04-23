import React from 'react';
import moment from 'moment';


const Letter = ({letter}) => (
    <div className="card-block">
        <div className="letter-card-header">
            <span className="mr-auto p-2">{moment(letter.date, "YYYY-MM-DD'T'HH:mm:ss").fromNow()}</span>
            <span className="p-2">{letter.from}</span>
        </div>
        <p className="card-text">{letter.text}</p>
    </div>
);

export default Letter;