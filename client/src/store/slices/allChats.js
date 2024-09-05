import {createSlice} from '@reduxjs/toolkit'

const chatSlicer = createSlice({
    name:'chat',
    initialState:[],
    reducers:{
       addGroup:(state,action)=>{
        state.push(action.payload)
       } 
    }
})
export const {addGroup} = chatSlicer.actions
export default chatSlicer.reducer