import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    name: "NO"
};

const increment = (state = INITIAL_STATE, action) => {
    if(action.type === actionTypes.CHECK_USER_NAME) {
        return {...state, name: "Ok"};
    }
    return state;
};

export default increment;