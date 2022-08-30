// hooks
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// own components


// material ui components
import {Box} from "@mui/material";

//selectors
import {getMessages} from "src/store/messages";
import {ChatList} from "src/components";
import {SendMessageFormContainer} from "./components/SendMessageForm";
import {MessageList} from "./components/MessageList";


export const MessangerChat = (): JSX.Element => {

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
