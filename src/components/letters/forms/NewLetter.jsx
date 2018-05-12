import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import RecipientAddress from "../../contacts/RecipientAddress";

class NewLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {message: "", address: ""}
    }

    handleAddressChange = (event) => {
        event.preventDefault();
        this.setState({address: event.target.value})
    };

    handleTextChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value})
    };

    handlePressSendButton = (event) => {
        event.preventDefault();
        console.info(this.props.recipient);
        this.props.sendLetter(this.state.address, this.state.message);
        this.setState({message: "", address: ""});
    };

    render() {
        return (
            <div className="letter-card">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                />
                <TextareaAutosize placeholder='Текст письма' onChange={this.handleTextChange} value={this.state.message}/>
                <button type="button" className="button" onClick={this.handlePressSendButton}>Send</button>
            </div>
        );
    }
};

export default NewLetter;