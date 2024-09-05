import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './slices/allChats.js'

const store = configureStore({
    reducer:{
        allChats:chatReducer
    }
})

export default store;