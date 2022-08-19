import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType} from "../../types/MessageType";

const initialState = [] as MessageType[]

const messageSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageType>) {
            state.push(action.payload)
        },
    },
})

export const messageActions = messageSlice.actions
export const messageReducer = messageSlice.reducer
