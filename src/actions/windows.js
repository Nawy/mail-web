import actionTypes from './actionTypes'

export const showNewLetterForm = () => ({type: actionTypes.SHOW_NEW_LETTER_FORM});

export const showReplyForm = () => ({type: actionTypes.SHOW_REPLY_LETTER_FORM});

export const hideAllForms = () => ({type: actionTypes.CLOSE_ALL_WINDOWS});

export const showSettingsForm = () => ({type:actionTypes.SHOW_SETTINGS_FORM});