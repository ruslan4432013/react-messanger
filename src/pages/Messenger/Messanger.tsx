import {ChatList, MessageList, SendMessageForm} from "../../components";
import {Box} from "@mui/material";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store";


const robotName = 'Robot'
const robotAnswer = 'Сообщение успешно отправлено'
let timerID: NodeJS.Timeout;


export const Messanger = (): JSX.Element => {

    const messageList = useSelector(getMessages)

    useEffect(() => {
        const lastMessage = messageList?.slice(-1)[0]


        if (lastMessage && lastMessage.author !== robotName) {
            timerID = setTimeout(() => addMessage({
                    _id: lastMessage._id + 1 || 0,
                    author: robotName,
                    text: robotAnswer
                }
            ), 1500)
        }

        return () => clearTimeout(timerID)

    }, [messageList])


    return (
        <>
            <ChatList/>
            <Box sx={{paddingLeft: '230px', boxSizing: 'border-box', width: '100%', height: '100%'}}>
                <div className={'messages'}>
                    <MessageList messageList={messageList}/>
                </div>
                <SendMessageForm/>
            </Box>
        </>
    )
}
