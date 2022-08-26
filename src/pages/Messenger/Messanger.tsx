// hooks
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// own components
import {ChatList, MessageList, SendMessageFormContainer} from "../../components";

// material ui components
import {Box} from "@mui/material";

//selectors
import {getMessages} from "../../store/messages";


export const Messanger = (): JSX.Element => {

    const message = useSelector(getMessages)
    const {chatID} = useParams<{ chatID: string }>()

    const currentMessageList = chatID && message[+chatID]


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
