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

    amountNewNumber = () => (
        <span className="letter-counter-badge">
            {this.props.chat.amountNew}
        </span>
    );

    render() {
        const isButtonPushed = this.isButtonPushed();
        return (
            <button
                type="button"
                className={isButtonPushed? "btn-address-selected" :"btn-address"}
                onClick={() => this.changeButtonState(isButtonPushed)}
            >
                <div className="d-flex flex-row">
                    <div className="p-1 flex-fill justify-content-start">
                        {this.props.chat.name}
                    </div>
                    <div className="p-1 justify-content-end">
                        {this.props.chat.amountNew < 1 ? "" : this.amountNewNumber()}
                    </div>
                </div>
            </button>
        );
    }
}

export default ChatName;