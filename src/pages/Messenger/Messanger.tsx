import {ChatList, MessageList, SendMessageForm} from "../../components";
import {Box} from "@mui/material";
import React, {useEffect} from "react";
import {MessangerProps} from "./Messanger.props";


export const author = 'Неопознанный енот'
const robotName = 'Robot'
const robotAnswer = 'Сообщение успешно отправлено'
let timerID: NodeJS.Timeout;


export const Messanger = ({setMessageList, messageList, chatList}: MessangerProps): JSX.Element => {

    useEffect(() => {
        const lastMessage = messageList?.slice(-1)[0]


        if (lastMessage && lastMessage.author !== robotName) {
            timerID = setTimeout(() => setMessageList(
                (perv) => [...perv, {
                    _id: perv.slice(-1)[0]?._id + 1 || 0,
                    author: robotName,
                    text: robotAnswer
                }]
            ), 1500)
        }

        return () => clearTimeout(timerID)

    }, [messageList, setMessageList])


    const addMessage = (message: string): void => {
        setMessageList((perv) => [...perv, {
            _id: perv.slice(-1)[0]?._id + 1 || 0,
            author,
            text: message
        }])
    }

    return (
        <>
            <ChatList chatList={chatList}/>
            <Box sx={{paddingLeft: '230px', boxSizing: 'border-box', width: '100%', height: '100%'}}>
                <div className={'messages'}>
                    <MessageList messageList={messageList}/>
                </div>
                <SendMessageForm addMessage={addMessage}/>
            </Box>
        </>
    )
}
