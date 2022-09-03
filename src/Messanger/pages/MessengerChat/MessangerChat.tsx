// hooks
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// own components


// material ui components
import {Box} from "@mui/material";

//selectors
import {getMessages} from "src/store/messages";
import {ChatList} from "src/components";
import {SendMessageFormContainer} from "./components/SendMessageForm";
import {MessageList} from "./components/MessageList";
import {useEffect} from "react";
import {AppDispatch, setMessages} from "src/store";
import {setListenerMessageDB} from "src/utils/firebase-db-utils";
import {MessageType, TMessages} from "src/types/MessageType";


export const MessangerChat = (): JSX.Element => {

    const message = useSelector(getMessages)
    const {chatID} = useParams<{ chatID: string }>()

    const currentMessageList = chatID && message[chatID]

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        setListenerMessageDB('', (data) => {
            if (data) {
                const newMessageList = {} as TMessages

                Object.values(data).sort((a, b) => a.time > b.time ? 1 : -1).forEach((value) => {

                    const messages = newMessageList[value.chatID]

                    const newMessage = {
                        _id: value.messageID,
                        text: value.messageText,
                        author: value.author
                    } as MessageType

                    if (messages) {
                        messages.push(newMessage)
                    } else {
                        newMessageList[value.chatID] = [newMessage]
                    }
                })
                dispatch(setMessages(newMessageList))
            }
        })
    }, [dispatch])


    return (
        <>
            <ChatList/>
            <Box sx={{paddingLeft: '230px', boxSizing: 'border-box', width: '100%', height: '100%'}}>
                <div className={'messages'}>
                    <MessageList messageList={currentMessageList || []}/>
                </div>
                <SendMessageFormContainer/>
            </Box>
        </>
    )
}
