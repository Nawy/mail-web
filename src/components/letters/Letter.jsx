import React from 'react';
import IncomingLettter from "./IncomingLetter";
import OutcomingLettter from "./OutcomingLetter";

const Letter = ({letter, userEmail}) =>
    letter.direction === "INBOX" ?
        <IncomingLettter from={letter.address}
                         htmlText={letter.htmlText}
                         text={letter.text}
                         date={letter.deliveryTime}
        /> :
        <OutcomingLettter from={userEmail + "@lite.ninja"}
                          htmlText={letter.htmlText}
                          text={letter.text}
                          date={letter.deliveryTime}
        />;

export default Letter;