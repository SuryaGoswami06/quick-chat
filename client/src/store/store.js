import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './slices/allChats.js'
import userReducer from './slices/user.js'

const store = configureStore({
    reducer:{
        allChats:chatReducer,
        user:userReducer
    }
})

export default store;