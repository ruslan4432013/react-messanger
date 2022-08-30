import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType, TMessages} from "../../types/MessageType";
import {TPayloadAddMessage} from "./types";
import {sendResponseFromBot} from "./actions";
import {AUTHORS} from "../../config";

const initialState = {} as TMessages

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
        removeAllMessagesFromChatById(state, action: PayloadAction<number>) {
            delete state[action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendResponseFromBot.fulfilled, (state, action) => {

            const chatID = action.payload

            const currentMessageList = state[chatID],
                lastMessage = currentMessageList.slice(-1)[0]

            if (lastMessage && lastMessage.author !== AUTHORS.BOT.name) {
                const newMessage: MessageType = {
                    _id: currentMessageList.length,
                    author: AUTHORS.BOT.name,
                    text: AUTHORS.BOT.answer
                }
                currentMessageList.push(newMessage)
            }


        })
    }
})

export const messageActions = messageSlice.actions
export const messageReducer = messageSlice.reducer
