import {bindActionCreators, configureStore} from '@reduxjs/toolkit'
import {profileActions, profileReducer} from "./profile/slice";
import {chatActions, chatReducer} from './chats/slice'
import {messageActions, messageReducer} from "./messages/slice";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatReducer,
        messages: messageReducer
    }
})

// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>

const actions = bindActionCreators({
    ...chatActions,
    ...profileActions,
    ...messageActions
}, store.dispatch)


export const {
    addMessage,
    addChat,
    removeChat,
    switchShowName,
    setName
} = actions


