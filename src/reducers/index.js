import { combineReducers } from 'redux'
import groupReducer from './groupReducer'
import userReducer from './userReducer'

export default combineReducers({
    userReducer: userReducer,
    groupReducer: groupReducer,
})