import actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    address: null
};

const chooseChat = (state = INITIAL_STATE, action) => {
    if (action.type === actionTypes.CHOOSE_CHAT) {
        return {...state, address: action.payload};
    }
    return state;
};

export default chooseChat;