import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class AuthNewLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ""}
    }

    handleTextChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value})
    };

    handlePressSendButton = (event) => {
        event.preventDefault();
        console.info(this.props.recipient);
        this.props.sendLetter(this.props.recipient, this.state.message);
        this.setState({message: ""})
    };

    render() {
        return (
            <div className="letter-card">
                <TextareaAutosize placeholder='Текст письма' onChange={this.handleTextChange} value={this.state.message}/>
                <button type="button" className="button" onClick={this.handlePressSendButton}>Send</button>
            </div>
        );
    }
}

export default AuthNewLetter;