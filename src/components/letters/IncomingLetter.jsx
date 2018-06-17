import React from 'react';
import LetterBody from "./LetterBody";

const IncomingLettter = ({from, htmlText, text, date}) => (
    <div className="letter-card">
        <LetterBody
            direction="IN"
            from={from}
            htmlText={htmlText}
            text={text}
            date={date}
        />
    </div>
);

export default IncomingLettter;