import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE ={
    isSettingsWindowOpen: false,
};

 const windows = (state = INITIAL_STATE, action) => {
    if (action.type === actionTypes.SET_WINDOWS_VISIBILITY_STATE) {
        return {
            ...state,
            isSettingsWindowOpen: action.payload.isSettingsOpen,
        };
    }
    return state;
};

export default windows;