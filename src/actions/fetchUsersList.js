import {
    USERS_LIST_REQUEST ,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from '../constants/actionsConstants';
import { API_URL } from '../constants/apiConstants';


export const getUsersList = () => {
    return (dispatch)=> {
        dispatch(usersListRequest());
        fetch(`${API_URL}/?results=50`)
            .then((response) => response.json())
            .then(data => {
                const { error, results } = data;
                if(error){
                    return dispatch(sourcesListFailure(error));
                }
                else{
                    return dispatch(usersListSuccess(results));
                }
            
            })
            .catch((err)=>{
                return dispatch(usersListFailure(err));
            });
    };
}

const usersListRequest = () =>({ type:USERS_LIST_REQUEST });

const usersListSuccess = users =>({
        type:USERS_LIST_SUCCESS,
        users
});

const usersListFailure = err =>({ type:USERS_LIST_FAILURE, err});