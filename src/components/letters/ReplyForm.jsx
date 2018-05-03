import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class ReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ""}
    }

    handleTextChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value})
    };

    render() {
        return (
            <div className="letter-card">
                <TextareaAutosize placeholder='Текст письма' onChange={this.handleTextChange}/>
                <button type="button" className="button">Send</button>
            </div>
        );
    }
}

export default ReplyForm;