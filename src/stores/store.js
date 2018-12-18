import Data from './../data/users';
import { CREATEUSER, LOGIN } from './../constants/constants';

const initialState = {
    users: Data,
    currentUser: {
        username: 'bbanner45',
        email: 'always_angry@gmail.com',
        password: 'berttyRoss456',
        firstName: 'Bruce',
        lastName: 'Banner',
        scoreHistory: [1000, 3500, 800, 2000, 3100],
    }
}

const currentUser = (state, user) => {
    let selectedUser = state.find( newUser => newUser.email === user.email);

    let newState = {
        users: state,
        currentUser: selectedUser
    } 

    return newState;
}

const loginUser = (state, logInfo) => {
    let findUser = state.users.find( returningUser => returningUser.email === logInfo.email );

    return {
        ...state, 
        currentUser: findUser
    }
}

const rootReducer = (state = initialState, action) => { 
    let updatedState;

    switch (action.type) {
        case LOGIN: {

            return loginUser(state, action.email);
        } 
        case CREATEUSER: {
            updatedState = [...state.users, action.user];

            return currentUser(updatedState, action.user);
        }
        default: 
            return state;
    }
}

export default rootReducer;