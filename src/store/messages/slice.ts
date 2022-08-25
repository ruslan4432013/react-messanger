import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType, TMessages} from "../../types/MessageType";

const initialState = {} as TMessages

type TPayloadAddMessage = {
    chatID: number
    message: MessageType

}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<TPayloadAddMessage>) {
            const {chatID, message} = action.payload
            const currentList = state[chatID]

            if (currentList) {
                currentList.push(message)
            } else {
                state[chatID] = [message]
            }

        },
    },
})

export const messageActions = messageSlice.actions
export const messageReducer = messageSlice.reducer
