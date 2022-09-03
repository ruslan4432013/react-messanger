import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {User} from '@firebase/auth/dist';


export type ProfileState = {
    name: string
    showName: boolean
    isAuth: boolean
}


const initialState = {
    name: 'Неопознанный енот',
    showName: false,
    isAuth: false
} as ProfileState


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        switchShowName(state) {
            state.showName = !state.showName
        },
        registerUser(state, action: PayloadAction<User>) {
            const {email} = action.payload

            if (email) {
                state.name = email
                state.isAuth = true
            }
        },
        dropAuthState(state) {
            state.isAuth = false
        },
        logout(state) {
            state.isAuth = false
            state.name = 'Неопознанный енот'
        }
    },
})

export const profileActions = profileSlice.actions
export const profileReducer = profileSlice.reducer
