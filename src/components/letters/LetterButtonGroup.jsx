import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faReply from "@fortawesome/fontawesome-free-solid/faReply";

const LetterButtonGroup = (props) => (
    <div>
        <button
            type="button"
            className={props.newLetterForm.isNewLetter ? "btn-rounded-selected ml-1": "btn-rounded ml-1"}
            onClick={props.showNewLetterForm}>
            <FontAwesomeIcon icon={faPencilAlt}/> Новое сообщение
        </button>
        <button
            type="button"
            className={props.newLetterForm.isReply ? "btn-rounded-selected ml-1": "btn-rounded ml-1"}
            onClick={props.showReplyForm}>
            <FontAwesomeIcon icon={faReply}/> Ответить
        </button>
    </div>
);

export default LetterButtonGroup;