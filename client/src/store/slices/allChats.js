import {createSlice} from '@reduxjs/toolkit'

const chatSlicer = createSlice({
    name:'chat',
    initialState:{
        roomIds:[],
        roomDetails:{}
    },
    reducers:{
       addGroup:(state,action)=>{
        const {roomId,roomName,roomAvatar} = action.payload
        if(!state.roomDetails[roomId]){
            state.roomDetails[roomId] = {};
            state.roomDetails[roomId]['roomName'] = roomName;
            state.roomDetails[roomId]['roomAvatar'] = roomAvatar;
            state.roomDetails[roomId]['content'] = [];
            state.roomIds.push(roomId)
        }
       } 
    }
})
export const {addGroup} = chatSlicer.actions
export default chatSlicer.reducer