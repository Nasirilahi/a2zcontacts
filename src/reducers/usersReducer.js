import {
    USERS_LIST_REQUEST ,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from '../constants/actionsConstants';

const genA2ZObj = (charA = 'a', charZ = 'z')  => {
    const obj = {};
    for (let i = charA.charCodeAt(0), j = charZ.charCodeAt(0); i <= j; ++i) {
        obj[String.fromCharCode(i)] = [];
    }
    return obj;
}

const getSections = users => {
    if (users.length === 0) {
      return [];
    }

    const sections = users.reduce((acc, user) => {
        let firstLetter = user?.name?.first[0].toLocaleLowerCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = { title: firstLetter, data: [user] };
        } else {
          acc[firstLetter].push(user);
        }
        return acc;
      },  initialState.users);
    Object.keys(sections).forEach(key => {
        sections[key].sort((a, b) => {
            const aName = a.name.first;
            const bName = b.name.first;
            if(aName < bName) return -1;
            if(aName > bName) return 1;
            return 0;
        });
    })
    return sections;
 }

 const initialState = {
    users : genA2ZObj(),
    isLoading:false,
    error: null
 };

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case USERS_LIST_REQUEST:
            return {...state, isLoading: true };

        case USERS_LIST_SUCCESS:
            const {users} = action;
            return {...state, users: getSections(users), isLoading: false, error: null };

        case USERS_LIST_FAILURE:
            return {...state, users:[], isLoading: false, error: action.err };

        default:
            return state;
    }
};

export default usersReducer;