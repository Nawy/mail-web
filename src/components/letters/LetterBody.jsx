import React from 'react';
import DOMPurify from 'dompurify'
import moment from 'moment';
import 'moment/locale/ru';
moment.locale("ru");

const Letter = ({direction, from, text, date}) => (
    <div className="card-block">
        <div className="letter-card-header">
           <span className="mr-auto p-0">
                <span className={direction === "OUT" ? "out-address-badge" : "in-address-badge"}>
                    {from}
                </span>
            </span>
            <span className="p-0">
                <span className="time-badge">
                    {moment(date, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}
                </span>
            </span>
        </div>
        <p className="card-text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}} />
    </div>
);

export default Letter;