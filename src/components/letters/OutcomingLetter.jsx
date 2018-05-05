import React from 'react';
import LetterBody from "./LetterBody";

const OutcomingLettter = ({from, text, date}) => (
    <div className="letter-card-sender">
        <LetterBody from={from}
                    text={text}
                    date={date}
        />
    </div>
);

export default OutcomingLettter;