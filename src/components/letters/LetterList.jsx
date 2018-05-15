import React from 'react';
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import Letter from "./Letter";
import NewLetter from "../../containers/NewLetterContainer";
import LetterButtonGroup from "../../containers/LetterButtonGroupContainer";
import ReplyForm from "../../containers/ReplyFormContainer";
import Settings from "../../containers/SettingsContainer";
import {MessageLoader} from "../../util/Loader";


const getMessages = (messages) => {
    if (messages.isLoading) return <MessageLoader/>;
    const messagesData = messages.data;
    if (isNull(messagesData) || isEmpty(messagesData)) return <p className="text-center">Нет сообщений</p>;
    console.log("Messages",messages);
    return messagesData.reverse().map(message => <Letter letter={message}/>);
};

const LetterList = ({messages, newLetterForm, isSettings, isEmailSelected}) => (
    <div>
        <LetterButtonGroup/>
        {(isSettings) && <Settings/>}

        {(newLetterForm.isNewLetter) && <NewLetter/>}
        {(newLetterForm.isReply && isEmailSelected) && <ReplyForm/>}
        {(!isSettings && isEmailSelected) && getMessages(messages)}
    </div>
);

export default LetterList;

