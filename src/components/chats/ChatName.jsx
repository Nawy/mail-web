import React, {Component} from 'react';

class ChatName extends Component {

    isButtonPushed = () => "/" + this.props.address ===  this.props.oldUrl;

    changeButtonState = (isButtonPushed) => {
        if (isButtonPushed){
            this.props.history.push("/");
        } else {
            this.props.hideAllWindows(); //TODO bad? remove?
            this.props.history.push(this.props.address);
        }
    };

    render() {
        const isButtonPushed = this.isButtonPushed();
        //if (isButtonPushed) this.props.chatMessages(this.props.address);
        return (
            <button
                type="button"
                className={isButtonPushed? "btn-address-selected" :"btn-address"}
                onClick={() => this.changeButtonState(isButtonPushed)}
            >
                {this.props.address}
            </button>
        );
    }
}

export default ChatName;