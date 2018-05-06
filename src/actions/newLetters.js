import actionTypes from './actionTypes'

export const showNewLetterForm = () => {
    return {type: actionTypes.SHOW_NEW_LETTER_FORM}
};

export const showReplyForm = () => {
    return {type: actionTypes.SHOW_REPLY_LETTER_FORM}
};

export const hideAllWriteLetterForms = () => {
    return {type: actionTypes.HIDE_ALL_WRITE_LETTER_FORM}
};