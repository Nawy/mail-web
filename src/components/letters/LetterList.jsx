import React, {Component} from 'react';
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import Letter from "./Letter";
import NewLetter from "../../containers/NewLetterContainer";
import LetterButtonGroup from "../../containers/LetterButtonGroupContainer";
import ReplyForm from "../../containers/ReplyFormContainer";
import Settings from "../../containers/SettingsContainer";
import {MessageLoader} from "../../util/Loader";


class LetterList extends Component {

     getMessages = (messages) => {
        if (messages.isLoading) return <MessageLoader/>;
        const messagesData = messages.data;
        if (isNull(messagesData) || isEmpty(messagesData)) return <p className="text-center">Нет сообщений</p>;
        console.log("Messages",messages);
         return messagesData.map(message => <Letter letter={message}/>);
        //return messagesData.reverse().map(message => <Letter letter={message}/>);
    };

     render(){
         const{messages, newLetterForm, isSettingsWindowVisible, isEmailSelected} = this.props;
         return (
             <div>
                 <LetterButtonGroup/>
                 {(isSettingsWindowVisible) && <Settings/>}

                 {(newLetterForm.isNewLetter) && <NewLetter/>}
                 {(newLetterForm.isReply && isEmailSelected) && <ReplyForm/>}
                 {(isEmailSelected) && this.getMessages(messages)}
             </div>
         );
     }

}

export default LetterList;

