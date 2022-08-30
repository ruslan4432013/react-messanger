import {Box, Button, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Fragment} from "react";
import {Link} from 'react-router-dom'
import {RoutesConst} from "../paths";
import {AddChatModal} from "../../components";
import {useSelector} from "react-redux";
import {getChats} from "../../store/chats/selectors";
import {removeAllMessagesFromChatById, removeChat} from "../../store";


export const Home = (): JSX.Element => {

    const chatList = useSelector(getChats)
    const removeChatHandler = (id: number) => {
        removeAllMessagesFromChatById(id)
        removeChat(id)
    }

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
                                to={`${RoutesConst.CHAT}/${chat.id}`}
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
