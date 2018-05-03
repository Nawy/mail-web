import React from 'react';
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import NewLetter from "./NewLetter";
import Loader from "../../util/Loader";
import shortid from "shortid";
import Letter from "./Letter";

const getMessagesWithIds = (messages) => messages.map((value) => {
    return {id: shortid.generate(), value: value}
});

const getMessagesOrEmpty = (messages) => isEmpty(messages) ?
    <p>Нет сообщений</p> :
    getMessagesWithIds(messages).map(
        message =>
            <Letter
                key={message.id}
                letter={message}
            />
    );

const getMessagesOrLoader = (messages) => messages.isLoading ? <Loader /> : getMessagesOrEmpty(messages.data);

const getMessages = (messages) => isNull(messages) ? "" : getMessagesOrLoader(messages);

const LetterList = ({messages}) => (
    <div>
        <NewLetter />

        {getMessages(messages)}

        {/*<IncomingLetter letter={{*/}
            {/*from: "ermolaevym@gmail.com",*/}
            {/*text: `Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the*/}
            {/*Libyan embassy on St James's Square in London. She had been deployed as a constable of the*/}
            {/*Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the*/}
            {/*protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding*/}
            {/*eleven Libyans. The inquest found that she was "killed by a bull"`,*/}
            {/*date: "2018-04-23T14:30:20"*/}
        {/*}}/>*/}
        {/*<OutcomingLetter letter={{*/}
            {/*from: "me",*/}
            {/*text: `Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the*/}
            {/*Libyan embassy on St James's Square in London. She had been deployed as a constable of the*/}
            {/*Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the*/}
            {/*protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding*/}
            {/*eleven Libyans. The inquest found that she was "killed by a bull"`,*/}
            {/*date: "2018-04-23T14:30:20"*/}
        {/*}}/>*/}
    </div>
);

export default LetterList;

