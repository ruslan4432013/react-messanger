export type MessageType = {
    _id: string,
    text: string,
    author: string
}

export type TMessages = {
    [chatID: string]: MessageType[]
}

export type TMessageResponse = {
    [key: string]: {
        author: string;
        chatID: string;
        messageID: string;
        messageText: string;
        time: Date
    }
}
