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

    state = {oldUrl: null};

    componentWillMount() {
        this.getChatMessages(this.props);
        this.setState({oldUrl: this.props.currentUrl});
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.currentUrl !== this.state.oldUrl) {
            this.getChatMessages(nextProps);
            this.setState({oldUrl: nextProps.currentUrl});
        }
    }

    isEmptyUrl = (url) => isEmpty(url) || url === "/";

    getChatMessages = (props) => {
        if (!this.isEmptyUrl(props.currentUrl) && props.currentUrl !== this.state.oldUrl) {
            props.getChatMessages(props.currentUrl);
            this.setState({oldUrl: props.currentUrl});
            return;
        }
        if (this.isEmptyUrl(props.currentUrl)){
            props.clearChatMessages();
        }
    };

     getMessages = (messages) => {
        if (messages.isLoading) return <MessageLoader/>;
        const messagesData = messages.data;
        if (isNull(messagesData) || isEmpty(messagesData)) return <p className="text-center">Нет сообщений</p>;
         const messagesCopy = messagesData.slice(); // create array shallow copy
         return messagesCopy.reverse().map(message => <Letter letter={message}/>);
    };

     render(){
         const {messages, windows} = this.props;
         return (
             <div>
                 <LetterButtonGroup/>
                 {windows.isSettingsWindowOpen && <Settings/>}
                 {windows.isNewLetterWindowOpen && <NewLetter/>}
                 {windows.isReplyWindowOpen && <ReplyForm/>}
                 {this.getMessages(messages)}
             </div>
         );
     }

}

export default LetterList;

