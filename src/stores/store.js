

const initialState = {
    users: [
        {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            scoreHistory: [],
        }
    ],
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;