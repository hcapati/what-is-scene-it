import Data from './../data/users';
import { CREATEUSER, LOGIN, ADDPTS, MINUSPTS } from './../constants/constants';

const initialState = {
    users: Data,
    currentUser: {
        username: 'bbanner45',
        email: 'always_angry@gmail.com',
        password: 'berttyRoss456',
        firstName: 'Bruce',
        lastName: 'Banner',
        scoreHistory: [1000, 3500, 800, 2000, 3100],
    },
    inGamePts: 0,
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
    let updatedPts;

    switch (action.type) {
        case LOGIN: {
            return loginUser(state, action.email);
        } 
        case CREATEUSER: {
            updatedState = [...state.users, action.user];

            return currentUser(updatedState, action.user);
        }
        case ADDPTS: {
            updatedPts = state.inGamePts + parseInt(action.points);

            return { 
                ...state,
                inGamePts: updatedPts
            } 
        }
        case MINUSPTS: {
            updatedPts = state.inGamePts - parseInt(action.points);

            return {
                ...state,
                inGamePts: updatedPts
            } 
        }
        default: 
            return state;
    }
}

export default rootReducer;