// import React from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const user_info = createSlice({
    name: 'user_info',
    initialState : {
        username : 'Tejas C M',
        id:'1234'
    },
    reducers : {
        set_user_info : (state,action) => {
            state.username = action.payload.username
            state.id = action.payload.id
        }
    }
}
)

export const { set_user_info } = user_info.actions

const store = configureStore({
    reducer: {
        user_info: user_info.reducer,
      }
})

export default store