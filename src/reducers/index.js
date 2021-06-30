import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import {usersDataReducer} from './usersDataReducer'

const allReducer = combineReducers({
    user: userReducer,
    usersData: usersDataReducer
})

export default allReducer