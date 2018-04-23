import React from 'react';
import LetterBody from "./LetterBody";

const IncomingLettter = ({letter}) => (
    <div className="letter-card">
        <LetterBody letter={letter} />
    </div>
);

export default IncomingLettter;