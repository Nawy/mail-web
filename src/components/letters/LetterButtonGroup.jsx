import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faReply from "@fortawesome/fontawesome-free-solid/faReply";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

const getButtonTypeClass = (predicate) => predicate ? "btn-rounded-selected ml-1" : "btn-rounded ml-1";

const LetterButtonGroup = (props) => (
    <div>
        <button
            type="button"
            className={getButtonTypeClass(props.newLetterForm.isNewLetter)}
            onClick={props.showNewLetterForm}>
            <FontAwesomeIcon icon={faPencilAlt}/> Новое сообщение
        </button>
        {props.isEmailSelected &&
            <button
                type="button"
                className={getButtonTypeClass(props.newLetterForm.isReply)}
                onClick={props.showReplyForm}>
                <FontAwesomeIcon icon={faReply}/> Ответить
            </button>
        }
        {
            (props.newLetterForm.isNewLetter || props.newLetterForm.isReply) &&
            <button
                type="button"
                className="btn-rounded ml-1"
                onClick={props.hideAllWriteLetterForms}>
                <FontAwesomeIcon icon={faTimes}/> Отмена
            </button>
        }

    </div>
);

export default LetterButtonGroup;