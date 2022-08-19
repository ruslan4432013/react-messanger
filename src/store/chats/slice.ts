import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ChatItemType} from "../../types/ChatListType";
import {chatListMock} from "../../mock/ChatListMock";


const initialState = chatListMock as ChatItemType[]

const chatsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addChat(state, action: PayloadAction<string>) {
            const lastId = state.slice(-1)[0]?.id

            state.push({id: lastId ? lastId + 1 : 1, name: action.payload})

        },
        removeChat(state, action: PayloadAction<number>) {
            const index = state.findIndex(el => el.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    },
})

export const chatActions = chatsSlice.actions
export const chatReducer = chatsSlice.reducer
