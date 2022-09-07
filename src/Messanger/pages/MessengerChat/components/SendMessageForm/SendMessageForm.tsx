import {Box, Button, TextField} from "@mui/material";
import {ChangeEvent, forwardRef, SyntheticEvent} from "react";

type SendMessageFormProps = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: SyntheticEvent) => void
    message: string
}

export const SendMessageForm = forwardRef<HTMLInputElement, SendMessageFormProps>(({
                                                                                       handleSubmit,
                                                                                       message,
                                                                                       handleChange
                                                                                   }, inputRef) => {
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
                data-testid="input-message-text"
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
            <Button
                onClick={handleSubmit}
                data-testid="input-button"
                sx={(theme) => ({
                background: theme.palette.background.paper,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                    background: theme.palette.primary.dark
                }
            })}>Send message</Button>
        </Box>
    )
})
