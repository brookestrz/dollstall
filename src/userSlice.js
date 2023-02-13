import {createSlice} from "@reduxjs/toolkit"


export const userSlice =  createSlice({
    name: "user",
    initialState:{
        user:null,
        posts: null
    },
    reducers:{
        login: (state,action) => {
            state.user = action.payload

        },
        logout: (state) => {
            state.user = null;
        },
        register: (state, action) => {
            state.user = action.payload
        },
        post: (state,action) => {
            state.posts = action.payload
        }

    }
});



export const {login,logout,register,post} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectPosts = (state) => state.user.posts


export default userSlice.reducer;