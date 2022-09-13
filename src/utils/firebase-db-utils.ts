import {getDatabase, ref, set, remove, onValue} from "firebase/database";
import {ChatItemFirebaseResponse} from "../types/ChatListType";
import {TMessageResponse} from "../types/MessageType";


export type TMessageInfo = {
    messageText: string,
    chatID: string | number,
    messageID: string | number,
    author: string,
}

type TChatInfo = {
    chatID: string | number,
    chatName: string
}

type TCallback = (data?: { [key: string]: ChatItemFirebaseResponse }) => void
type TMessageCallback = (data?: TMessageResponse) => void

type TWriteMessage = (messageInfo: TMessageInfo) => void
type TWriteChat = (chatInfo: TChatInfo) => any

type TChatListener = (chatID?: string, callback?: TCallback) => void
type TMessageListener = (messageID?: string, callback?: TMessageCallback) => void

export const writeMessage: TWriteMessage = async ({messageText, messageID, chatID, author}) => {
    const db = getDatabase();
    await set(ref(db, 'messages/' + messageID), {chatID, messageText, author, messageID, time: Date.now()});
}

export const writeChat: TWriteChat = async ({chatID, chatName}) => {
    const db = getDatabase()
    return await set(ref(db, 'chats/' + chatID), {chatName, chatID})
}

export const removeChat = async (chatID: string) => {
    const db = getDatabase()
    await remove(ref(db, 'chats/' + chatID))
}


export const setListenerDB: TChatListener = (chatID = '', callback) => {
    const db = getDatabase()
    const starCountRef = ref(db, 'chats/' + chatID);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        callback && callback(data)
    })
}


export const setListenerMessageDB: TMessageListener = (messageID = '', callback) => {
    const db = getDatabase()
    const starCountRef = ref(db, 'messages/' + messageID);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        callback && callback(data)
    })
}

