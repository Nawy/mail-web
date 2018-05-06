import React from 'react';
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import Loader from "../../util/Loader";
import shortid from "shortid";
import Letter from "./Letter";
import NewLetter from "./NewLetter";
import LetterButtonGroup from "./LetterButtonGroup";

const getMessagesWithIds = (messages) => messages.map((value) => {
    return {id: shortid.generate(), value: value}
});

const getMessagesOrEmpty = (messages) => isEmpty(messages) ?
    <p className="text-center">Нет сообщений</p> :
    getMessagesWithIds(messages).map(
        message =>
            <Letter
                key={message.id}
                letter={message}
            />
    );

const getMessagesOrLoader = (messages) => messages.isLoading ? <Loader /> : getMessagesOrEmpty(messages.data);

const getMessages = (messages) => isNull(messages) ? "" : getMessagesOrLoader(messages);

const LetterList = ({isAuthorized, messages}) => (
    <div>
        {isAuthorized && <LetterButtonGroup />}
        {isAuthorized && getMessages(messages)}
        {!isAuthorized && <NewLetter />}
    </div>
);

export default LetterList;

