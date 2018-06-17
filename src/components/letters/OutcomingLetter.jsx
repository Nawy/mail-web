import React from 'react';
import LetterBody from "./LetterBody";

const OutcomingLettter = ({from, htmlText, text, date}) => (
    <div className="letter-card-sender">
        <LetterBody
            direction="OUT"
            from={from}
            htmlText={htmlText}
            text={text}
            date={date}
        />
    </div>
);

export default OutcomingLettter;