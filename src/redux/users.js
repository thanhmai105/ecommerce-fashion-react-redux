import * as ActionTypes from './ActionTypes';

export const User = (
    state = {
        isLoading: false,
        errMess: null,
        user: {},
        listUser: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.REGISTER:
            return { ...state, isLoading: false, errMess: null, user: action.payload };

        case ActionTypes.REGISTER_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.GET_USER:
            return { ...state, listUser: action.payload };

        default:
            return state;
    }
};


