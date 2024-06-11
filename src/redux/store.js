import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice.js'
import fabReducer from './slice/fabSlice.js'

const rootReducer = combineReducers({
    user:userReducer,
    fab:fabReducer,

})

export const store = configureStore({
    reducer:rootReducer
})