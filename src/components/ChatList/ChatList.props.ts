
export type ChatItemType = {
    id: number
    name: string,
}

export type ChatItemProps = {
    selectedIndex: string,
} & ChatItemType


export type ChatListProps = {
    chatList: ChatItemType[]
}
