import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ChatItemType} from "src/types/ChatListType";

const initialState = [] as ChatItemType[]


const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        addChat(state, action: PayloadAction<{chatID: string, chatName: string}>) {

            const {chatID, chatName} = action.payload
            state.push({id: chatID, name: chatName})

        },
        setChats(state, action: PayloadAction<ChatItemType[]>) {
            return action.payload
        },

        removeChatAction(state, action: PayloadAction<string>) {
            const index = state.findIndex(el => el.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    }
})

export const chatActions = chatsSlice.actions
export const chatReducer = chatsSlice.reducer
