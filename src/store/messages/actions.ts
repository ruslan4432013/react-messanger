import {createAsyncThunk} from "@reduxjs/toolkit";


function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const sendResponseFromBot = createAsyncThunk(
    'messages/botResponse',
    async (chatID: number) => {
        await timeout(1500)
        return chatID
    }
)

