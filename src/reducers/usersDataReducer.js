export const usersDataReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_USERS_DATA":
            return action.payload
        default:
            return state
    }
}