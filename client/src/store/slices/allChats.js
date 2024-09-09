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
            state.roomDetails[roomId]['participants']=1
            state.roomIds.push(roomId)
        }
       },
       addMessage:(state,action)=>{
        const {roomid,userName,message,time,role} = action.payload;
        if(state.roomDetails[roomid]){
            state.roomDetails[roomid].content.push({
                role,
                userName,
                message,
                time
            })
        }
       },
       currentParticipants:(state,action)=>{
        const {roomid,participant} = action.payload
        if(state.roomDetails[roomid]){
            state.roomDetails[roomid].participants=participant;
       }
      }
    }
})
export const {addGroup,addMessage,currentParticipants} = chatSlicer.actions
export default chatSlicer.reducer