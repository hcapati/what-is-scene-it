import Data from './../data/users';
import Cards from './../data/cards';
import { CREATEUSER, LOGIN, ADDPTS, MINUSPTS, SETDIFFICULTY, SETCATEGORY, DISABLECARD, GAMEOVER, RESULTS } from './../constants/constants';

const initialState = {
    users: Data,
    currentUser: { },
    inGamePts: 0,
    category: 0,
    difficulty: '',
    cards : Cards,
    cardCounter: 0
}

const currentUser = (state, user) => {
    let newUserCopy = state.users.slice();
    let addUser = newUserCopy.push(user);
    addUser = newUserCopy;

    let selectedUser = addUser.find( newUser => newUser.email === user.email);

    let newState = {
        ...state,
        users: addUser,
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

const storePoints = (state) => {
    let scoreHistoryCopy = state.currentUser.scoreHistory.slice();
    let newScore = scoreHistoryCopy.push(state.inGamePts)
    
    newScore = scoreHistoryCopy
    
    return newScore
    
}

const updateUsers = (state) => {
    let newUserCopy = state.users.slice();
    let currentUserIndex = newUserCopy.findIndex( u => u.email === state.currentUser.email);
    console.log(currentUserIndex);
    newUserCopy.splice(currentUserIndex, 1, state.currentUser)
    console.log(state.currentUser);
    
    return newUserCopy
}

const rootReducer = (state = initialState, action) => { 
    let updatedState;
    let updatedPts;

    switch (action.type) {
        case LOGIN: {
            return loginUser(state, action.email);
        } 
        case CREATEUSER: {
            // updatedState = [...state.users, action.user];

            return currentUser(state, action.user);
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
            return {
                ...state, 
                cardCounter: state.cardCounter + 1,
                cards: state.cards.map((c, i) => i === action.card ? {...c, val: true}
                    : c )
            }
        }
        case GAMEOVER: {
            return {
                ...state,
                cardCounter: 0,
                inGamePts: 0,
                category: 0,
                difficulty: '', 
                cards: [
                    state.cards.map((c) => {
                    return {    
                            ...c,
                            val: false 
                        }
                    })
                ],
                currentUser: {
                    ...state.currentUser,
                    scoreHistory: storePoints(state)
                }
            }
        }
        case RESULTS: {
            return {
                ...state,
                users: updateUsers(state)
            }
        }
        default: 
            return state;
    }
}

export default rootReducer;