import {Box, Button, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Fragment, useEffect} from "react";
import {Link} from 'react-router-dom'
import {ROUTES} from "src/config";
import {AddChatModal} from "src/components";
import {AppDispatch, setChats} from "src/store";
import {useDispatch, useSelector} from "react-redux";
import {getChats} from "src/store/chats/selectors";
import {removeChatFromFirebase} from "src/store/chats/actions";
import {setListenerDB} from "src/utils/firebase-db-utils";


export const Home = () => {

    const chatList = useSelector(getChats)
    const dispatch: AppDispatch = useDispatch()

    const removeChatHandler = (id: string) => {
        dispatch(removeChatFromFirebase(id))
    }

    useEffect(() => {
        setListenerDB('', (data) => {

            if (data) {
                const correctChatsForReducerState = Object.values(data).map(el => ({id: el.chatID, name: el.chatName}))
                dispatch(setChats(correctChatsForReducerState))
            }
        })
    }, [dispatch])


    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            width: '100%',
            alignItems: 'center',
            justifyItems: 'center'
        }}>
            <Typography color={'white'} sx={{marginBottom: 5}} variant={'h1'}>Список всех чатов</Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '200px 30px',
                    columnGap: '20px',
                    alignItems: 'flex-start',

                }}
            >
                {chatList.map(chat => (
                    <Fragment key={chat.id}>
                        <Button component={Link}
                                to={`${ROUTES.CHAT}/${chat.id}`}
                                size={'large'}
                                variant={'outlined'}
                                sx={{
                                    color: 'white',
                                    width: '200px',
                                    mb: 3
                                }}

                        >
                            {chat.name}
                        </Button>
                        <IconButton
                            onClick={() => removeChatHandler(chat.id)}
                            color="error"
                            edge="end"
                            aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </Fragment>)
                )}
            </Box>
            <AddChatModal variant={'button'}/>
        </Box>

    )
}
