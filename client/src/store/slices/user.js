import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'anonymous',
        profileUrl:'https://play-lh.googleusercontent.com/ai7FC9zp1bG8zLcl97w9rNde_oZ5s086XP1ZkBFdwf72d_owIiUVJu1-XNp6eOO-AGg'
    },
    reducers:{
        setUserName:(state,action)=>{
            state.name = action.payload
        },
        setProfileUrl:(state,action)=>{
            state.profileUrl=action.payload
        }
    }
})
export const {setProfileUrl,setUserName} = userSlice.actions;
export default userSlice.reducer;