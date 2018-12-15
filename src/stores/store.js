import Data from './../data/users';

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

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;