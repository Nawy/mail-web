import React from 'react';
import moment from 'moment';


const Letter = ({letter}) => (
    <div className="card-block">
        <div className="letter-card-header">
           <span className="mr-auto p-0">
                <span className="badge badge-pill badge-info">
                    {letter.from}
                </span>
            </span>
            <span className="p-0">
                <span className="badge badge-pill badge-info">
                    {moment(letter.date, "YYYY-MM-DD'T'HH:mm:ss").fromNow()}
                </span>
            </span>
        </div>
        <p className="card-text">{letter.text}</p>
    </div>
);

export default Letter;