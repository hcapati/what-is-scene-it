import Data from './../data/users';
import Cards from './../data/cards';
import { CREATEUSER, LOGIN, ADDPTS, MINUSPTS, SETDIFFICULTY, SETCATEGORY, DISABLECARD } from './../constants/constants';

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
    category: 0,
    difficulty: '',
    cards : Cards
    
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
        case SETCATEGORY: {
            return {
                ...state,
                category: action.value,
            }
        }
        case SETDIFFICULTY: {
            return {
                ...state,
                difficulty: action.value,
            }
        }
        case DISABLECARD: {
            console.log(action.card)
            return {
                ...state, 
                cards: state.cards.map((c, i) => i === action.card ? {...c, val: true}
                    : c )
            }
        }
        default: 
            return state;
    }
}

export default rootReducer;