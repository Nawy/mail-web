import React from 'react';
import LetterBody from "./LetterBody";

const IncomingLettter = ({from, text, date}) => (
    <div className="letter-card">
        {console.info("Date:" + date)}
        <LetterBody
            from={from}
            text={text}
            date={date}
        />
    </div>
);

export default IncomingLettter;