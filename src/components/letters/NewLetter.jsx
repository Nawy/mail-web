import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import RecipientAddress from "../contacts/RecipientAddress";

const NewLetter = () => {
    return (
        <div className="letter-card">
            <RecipientAddress />
            <TextareaAutosize placeholder='Текст письма'/>
            <button type="button" className="button">Send</button>
        </div>
    );
};

export default NewLetter;