import {AnyAction, bindActionCreators, combineReducers, configureStore} from '@reduxjs/toolkit'
import {profileActions, profileReducer} from "./profile/slice";
import {chatActions, chatReducer} from './chats/slice'
import {messageActions, messageReducer} from "./messages";
import thunk, {ThunkDispatch} from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {coinsReducer} from "./coins";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['coins']
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messageReducer,
    coins: coinsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

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
    removeAllMessagesFromChatById,
    setName
} = actions

export const persistor = persistStore(store)
