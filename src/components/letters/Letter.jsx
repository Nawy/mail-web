import React from 'react';
import IncomingLettter from "./IncomingLetter";
import OutcomingLettter from "./OutcomingLetter";

const Letter = ({letter}) =>
    letter.direction === "INBOX" ?
        <IncomingLettter from={letter.address}
                         text={letter.htmlText}
                         date={letter.deliveryTime}
        /> :
        <OutcomingLettter from="me"
                          text={letter.htmlText}
                          date={letter.deliveryTime}
        />;

export default Letter;