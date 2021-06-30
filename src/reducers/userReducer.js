const INITIAL_STATE = {
    username: '',
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                username: action.payload,
            }
        case 'LOG_OUT':
            return INITIAL_STATE
        default:
            return state
    }
}