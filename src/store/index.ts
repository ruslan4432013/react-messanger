import {AnyAction, combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
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
    whitelist: ['coins']
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

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}


// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

export type AppStoreT = ReturnType<typeof setupStore>
export type RootStateT = ReturnType<typeof rootReducer>




export const {switchShowName, logout, registerUser} = profileActions
export const {setChats} = chatActions
export const {setMessages} = messageActions


export const persistor = persistStore(store)
