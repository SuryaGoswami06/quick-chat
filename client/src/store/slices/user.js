import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'anonymous',
        },
    reducers:{
        setUserName:(state,action)=>{
            state.name = action.payload
        }
    }
})
export const {setUserName} = userSlice.actions;
export default userSlice.reducer;