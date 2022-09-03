import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4} from "uuid";
import {writeChat} from "src/utils/firebase-db-utils";
import {removeChat} from 'src/utils/firebase-db-utils'

export const createNewChatInFirebase = createAsyncThunk(
    'chats/setUpChats',
    async (chatName: string) => {

        const newChat = {
            chatID: v4(),
            chatName: chatName
        }

        await writeChat(newChat)
    }
)


export const removeChatFromFirebase = createAsyncThunk(
    'chats/removeChat',
    async (chatID: string) => {
        await removeChat(chatID)
    }
)
