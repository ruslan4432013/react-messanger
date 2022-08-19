import {bindActionCreators, createSlice, PayloadAction} from "@reduxjs/toolkit";


export type ProfileState = {
    showName: boolean
    name: string
}


const initialState = {showName: false, name: 'Неопознанный енот'} as ProfileState


const profileSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        switchShowName(state) {
            state.showName = !state.showName
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        }
    },
})

export const profileActions = profileSlice.actions
export const profileReducer = profileSlice.reducer
