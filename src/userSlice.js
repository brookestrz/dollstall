import {createSlice} from "@reduxjs/toolkit"

const data = {
    username: "brookelol",
    posts: "I''m so bored"
}


export const userSlice =  createSlice({
    name: "user",
    initialState:{
        user:null,
        posts: data,
        requests: null
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
        },
        request: (state,action) => {
            state.requests = action.payload


        }

    }
});



export const {login,logout,register,post, request} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectPosts = (state) => state.user.posts

export const selectRequests = (state) => state.user.requests


export default userSlice.reducer;