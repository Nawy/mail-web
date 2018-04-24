import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const NewLetter = () => {
    return (
        <div className="letter-card">
            <TextareaAutosize placeholder='Текст письма'/>
            <button type="button" className="button">Send</button>
        </div>
    );
};

export default NewLetter;