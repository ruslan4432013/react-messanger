import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4} from "uuid";
import {TMessageInfo, writeMessage} from "src/utils/firebase-db-utils";


function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const sendResponseFromBot = createAsyncThunk(
    'messages/botResponse',
    async (chatID: string) => {
        await timeout(1500)
        return chatID
    }
)

export const sendMessageWithFireBase = createAsyncThunk(
    'messages/botResponse',
    async ({chatID, messageText, author}: Omit<TMessageInfo, 'messageID'>, {dispatch}) => {
        const newMessage = {
            chatID: chatID,
            messageText: messageText,
            author: author,
            messageID: v4()
        } as TMessageInfo

        await writeMessage(newMessage)
    }
)
