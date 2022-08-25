export type MessageType = {
    _id: number,
    text: string,
    author: string
}

export type TMessages = {
    [chatID: number]: MessageType[]
}
