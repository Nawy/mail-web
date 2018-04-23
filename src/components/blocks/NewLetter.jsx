import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const NewLetter = () => {
    return (
        <div className="letter-card">
            <TextareaAutosize placeholder='Текст письма'/>
            <button type="button" className="btn btn-primary btn-sm">Send</button>
        </div>
    );
};

export default NewLetter;