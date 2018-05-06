import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faReply from "@fortawesome/fontawesome-free-solid/faReply";

const LetterButtonGroup = () => (
    <div>
        <button type="button" className="btn-letter">
            <FontAwesomeIcon icon={faPencilAlt}/> Новое сообщение
        </button>
        <button type="button" className="btn-letter">
            <FontAwesomeIcon icon={faReply}/> Ответить
        </button>
    </div>
);

export default LetterButtonGroup;