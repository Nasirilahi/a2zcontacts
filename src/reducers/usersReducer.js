import {
    USERS_LIST_REQUEST ,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from '../constants/actionsConstants';

const initialState = {
   users :[],
   isLoading:false,
   error: null
};
const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case USERS_LIST_REQUEST:
            return {...state, isLoading: true };

        case USERS_LIST_SUCCESS:
            return {...state, users: action.users, isLoading: false, error: null };

        case USERS_LIST_FAILURE:
            return {...state, users:[], isLoading: false, error: action.err };

        default:
            return state;
    }
};

export default usersReducer;