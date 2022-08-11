import {ChangeEvent, SyntheticEvent, useEffect, useRef, useState} from "react";
import {SendMessageFormProps} from "./SendMessageForm.props";
import {Box, Button, TextField} from "@mui/material";

export const SendMessageForm = ({addMessage}: SendMessageFormProps): JSX.Element => {

    const [message, setMessage] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [inputRef])

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()
        message && addMessage(message)
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
