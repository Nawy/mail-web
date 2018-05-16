import actionTypes from '../actions/actionTypes'

export const setSettingWindowsVisibility = (isSettingsOpen) => {
    return {type: actionTypes.SET_WINDOWS_VISIBILITY_STATE, payload: {isSettingsOpen:isSettingsOpen}}
};