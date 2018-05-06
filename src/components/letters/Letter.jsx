import React from 'react';
import IncomingLettter from "./IncomingLetter";
import OutcomingLettter from "./OutcomingLetter";

const Letter = ({letter}) =>
    letter.value.direction === "INBOX" ?
        <IncomingLettter from={letter.value.address}
                         text={letter.value.htmlText}
                         date={letter.value.time}
        /> :
        <OutcomingLettter from="me"
                          text={letter.value.htmlText}
                          date={letter.value.time}
        />;

export default Letter;