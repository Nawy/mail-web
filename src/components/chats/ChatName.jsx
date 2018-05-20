import React, {Component} from 'react';
import {Badge} from "reactstrap";

class ChatName extends Component {

    isButtonPushed = () => "/" + this.props.chat.name === this.props.currentUrl;

    changeButtonState = (isButtonPushed) => {
        if (isButtonPushed){
            this.props.history.push("/");
        } else {
            this.props.hideAllWindows(); //TODO bad? remove?
            this.props.history.push(this.props.chat.name);
        }
    };

    ammountNewNumber = () => (
        <Badge className="float-right"
               style={{margin: 'inherit', border: 'inherit', padding: 'inherit'}}
               color="light">
            {this.props.chat.amountNew}
        </Badge>
    );

    render() {
        const isButtonPushed = this.isButtonPushed();
        return (
            <button
                type="button"
                className={isButtonPushed? "btn-address-selected" :"btn-address"}
                onClick={() => this.changeButtonState(isButtonPushed)}
            >
                {this.props.chat.name}
                {this.props.chat.amountNew < 1 ? "" : this.ammountNewNumber()}
            </button>
        );
    }
}

export default ChatName;