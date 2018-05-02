import React from 'react';
import moment from 'moment';

const Letter = ({from, text, date}) => (
    <div className="card-block">
        <div className="letter-card-header">
           <span className="mr-auto p-0">
                <span className="badge badge-pill badge-info">
                    {from}
                </span>
            </span>
            <span className="p-0">
                <span className="badge badge-pill badge-info">
                    {moment(date, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}
                </span>
            </span>
        </div>
        <p className="card-text">{text}</p>
    </div>
);

export default Letter;