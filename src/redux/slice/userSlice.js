import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        //tweek this to set either logged in or logged out
        isLoggedIn:true
    },
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true;
        },
        logout:(state,action)=>{
            state.isLoggedIn=false;
            },
    }
})
export const { login, logout } = userSlice.actions

export default userSlice.reducer