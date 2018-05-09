import React from 'react';
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import Loader from "../../util/Loader";
import shortid from "shortid";
import Letter from "./Letter";
import NewLetter from "./forms/NewLetter";
import LetterButtonGroup from "../../containers/LetterButtonGroupContainer";
import ReplyForm from "./forms/ReplyForm";
import Settings from "../../containers/settings/SettingsContainer";

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

const getMessagesOrLoader = (messages) => messages.isMessageLoading ? <Loader /> : getMessagesOrEmpty(messages.messages);

const getMessages = (messages) => isNull(messages) ? "" : getMessagesOrLoader(messages);

const LetterList = ({isAuthorized, messages, newLetterForm, isSettings, isEmailSelected}) => (
    <div>
        {isAuthorized && <LetterButtonGroup />}
        {(isAuthorized && isSettings) && <Settings />}

        {(newLetterForm.isNewLetter) && <NewLetter />}
        {(isAuthorized && newLetterForm.isReply && isEmailSelected) && <ReplyForm />}
        {(isAuthorized && !isSettings && isEmailSelected) && getMessages(messages)}
    </div>
);

export default LetterList;

