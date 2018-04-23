import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import IncomingLetter from "./IncomingLetter";
import OutcomingLetter from "./OutcomingLetter";

const LetterList = () => (
    <div>
        <div className="letter-card">
            <TextareaAutosize placeholder='Текст письма'/>
        </div>
        <IncomingLetter letter={{
            from: "ermolaevym@gmail.com",
            text: `Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the
            Libyan embassy on St James's Square in London. She had been deployed as a constable of the
            Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the
            protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding
            eleven Libyans. The inquest found that she was "killed by a bull"`,
            date: "2018-04-23T14:30:20"
        }}/>
        <OutcomingLetter letter={{
            from: "me",
            text: `Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the
            Libyan embassy on St James's Square in London. She had been deployed as a constable of the
            Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the
            protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding
            eleven Libyans. The inquest found that she was "killed by a bull"`,
            date: "2018-04-23T14:30:20"
        }}/>
    </div>
);

export default LetterList;

