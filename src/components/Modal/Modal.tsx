import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ChangeEvent, useState} from "react";
import {ListItemButton, ListItemText, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {createNewChatInFirebase} from "../../store/chats/actions";
import {AppDispatch} from "../../store";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'linear-gradient(180deg, #343361 0%, #302F4D 54.17%, #302F4D 100%)',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
};

type CustomModalProps = {
    open: boolean,
    handleClose: () => void
}

export const CustomModal = ({open, handleClose}: CustomModalProps) => {
    const [chatName, setChatName] = useState<string>('')
    const dispatch: AppDispatch = useDispatch()

    const clickAddChatHandler = () => {
        if (chatName) {
            dispatch(createNewChatInFirebase(chatName))
            handleClose()
            setChatName(() => '')
        }

    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        color={'white'}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        textAlign={'center'}
                        sx={{mb: 2}}
                    >
                        Add new chat
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '20px',
                    }}>
                        <TextField
                            value={chatName}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                setChatName(e.target.value)
                            }}
                            label="Chat name"
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
                            onClick={clickAddChatHandler}
                            sx={(theme) => ({
                                background: theme.palette.background.paper,
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    background: theme.palette.primary.dark
                                }
                            })}>Add chat</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}


type AddChatModalProps = {
    variant: 'list' | 'button'
}

export const AddChatModal = ({variant}: AddChatModalProps) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const TypedElement = variant === 'list'
        ? (
            <ListItemButton onClick={handleOpen}>
                <ListItemText sx={{color: 'white'}}>
                    Add Chat +
                </ListItemText>
            </ListItemButton>
        )
        : (
            <Button size={'large'}
                    variant={'outlined'}
                    sx={{color: 'white', width: '200px', mb: 3}}
                    onClick={handleOpen}>
                Add Chat +
            </Button>
        )

    return (
        <>
            {TypedElement}
            <CustomModal open={open} handleClose={handleClose}/>
        </>
    )

}
