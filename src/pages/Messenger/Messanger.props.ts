import {Dispatch, SetStateAction} from "react";
import {MessageType} from "../../types/MessageType";
import {ChatItemType} from "../../components/ChatList/ChatList.props";

export type MessangerProps = {
    setMessageList: Dispatch<SetStateAction<MessageType[]>>
    messageList: MessageType[],
    chatList: ChatItemType[]
}
