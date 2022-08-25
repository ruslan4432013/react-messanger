import {ChangeEvent, SyntheticEvent, useEffect, useRef, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {addMessage} from "../../store";
import {useSelector} from "react-redux";
import {getMessages} from "../../store/messages/selectors";
import {getUserName} from "../../store/profile/selectors";
import {useParams} from "react-router-dom";

export const SendMessageForm = (): JSX.Element => {

    const [message, setMessage] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const messages = useSelector(getMessages)
    const author = useSelector(getUserName)
    const {chatID} = useParams<{ chatID: string }>()

    const messageList = chatID && messages[+chatID]

    useEffect(() => {
        inputRef.current?.focus()
    }, [inputRef])

    const createNewMessage = (message: string): void => {
        const newMessage = {
            _id: Array.isArray(messageList) ? messageList.length : 0,
            author: author,
            text: message
        }
        addMessage({
            chatID: chatID ? +chatID : 0,
            message: newMessage
        })
    }


    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()
        message && createNewMessage(message)
        setMessage('')
        inputRef.current?.focus()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '20px',
                bottom: '15px',
                width: '80%'
            }}
        >
            <TextField
                inputRef={inputRef}
                onChange={handleChange}
                value={message}
                label="message"
                color="primary"
                variant="filled"
                sx={{
                    flexGrow: 1,

                    background: 'linear-gradient(180deg, #1E1F29 0%, #272B4B 100%) no-repeat',
                    '& .MuiFormLabel-root': {
                        color: (theme) => theme.palette.primary.contrastText
                    },
                    '& .MuiFilledInput-root': {
                        color: 'white',
                    }
                }}
            />
            <Button onClick={handleSubmit} sx={(theme) => ({
                background: theme.palette.background.paper,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                    background: theme.palette.primary.dark
                }
            })}>Send message</Button>
        </Box>
    );
}
