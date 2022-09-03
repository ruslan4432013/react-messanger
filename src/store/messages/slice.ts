import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TMessages} from "../../types/MessageType";

const initialState = {} as TMessages

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        removeAllMessagesFromChatById(state, action: PayloadAction<string>) {
            delete state[action.payload]
        },
        setMessages(state, action: PayloadAction<TMessages>) {
            return action.payload
        }
    }

})


export const messageActions = messageSlice.actions
export const messageReducer = messageSlice.reducer
