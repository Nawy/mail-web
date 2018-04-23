import React from 'react';
import LetterBody from "./LetterBody";

const OutcomingLettter = ({letter}) => (
    <div className="letter-card-sender">
        <LetterBody letter={letter} />
    </div>
);

export default OutcomingLettter;