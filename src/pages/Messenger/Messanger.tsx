import {ChatList, MessageList, SendMessageForm} from "../../components";
import {Box} from "@mui/material";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store";
import {useParams} from "react-router-dom";


const robotName = 'Robot'
const robotAnswer = 'Сообщение успешно отправлено'
let timerID: NodeJS.Timeout;


export const Messanger = (): JSX.Element => {

    const message = useSelector(getMessages)
    const {chatID} = useParams<{ chatID: string }>()

    const currentMessageList = chatID && message[+chatID]


    useEffect(() => {
        const lastMessage = currentMessageList && currentMessageList.slice(-1)[0]


        if (lastMessage && lastMessage.author !== robotName) {

            const newMessage = {
                _id: lastMessage._id + 1 || 0,
                author: robotName,
                text: robotAnswer
            }

            timerID = setTimeout(() => addMessage({
                    chatID: +chatID || 0,
                    message: newMessage
                }
            ), 1500)
        }

        return () => clearTimeout(timerID)

    }, [message, chatID, currentMessageList])


    return (
        <>
            <ChatList/>
            <Box sx={{paddingLeft: '230px', boxSizing: 'border-box', width: '100%', height: '100%'}}>
                <div className={'messages'}>
                    <MessageList messageList={currentMessageList || []}/>
                </div>
                <SendMessageForm/>
            </Box>
        </>
    )
}
