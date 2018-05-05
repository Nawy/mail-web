import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    address: null,
    isSettings: false
};

const chooseMenu = (state = INITIAL_STATE, action) => {
    if (action.type === actionTypes.CHOOSE_MENU) {
        return {
            ...state,
            address: action.payload.address,
            isSettings: action.payload.isSettings
        };
    }
    return state;
};

export default chooseMenu;