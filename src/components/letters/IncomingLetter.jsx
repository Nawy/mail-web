import React from 'react';
import LetterBody from "./LetterBody";

const IncomingLettter = ({from, text, date}) => (
    <div className="letter-card">
        <LetterBody
            direction="IN"
            from={from}
            text={text}
            date={date}
        />
    </div>
);

export default IncomingLettter;