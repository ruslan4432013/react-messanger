import {ChatItemProps} from "./ChatList.props";
import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../config/paths";
import {useEffect} from "react";
import {AddChatModal} from "../Modal/Modal";
import {useSelector} from "react-redux";
import {getChats} from "../../store/chats/selectors";

const ChatItem = ({id, name, selectedIndex}: ChatItemProps): JSX.Element => {


    return (
        <ListItemButton
            component={Link}
            to={`${ROUTES.CHAT}/${id}`}
            sx={{
                '&.Mui-selected': {
                    background: (theme) => theme.palette.background.paper
                }
            }}
            selected={selectedIndex === `${id}`}
        >
            <ListItemText sx={{color: 'white'}}>
                {name}
            </ListItemText>
        </ListItemButton>
    )
}


export const ChatList = (): JSX.Element => {

    const {chatID} = useParams<{ chatID: string }>()
    const navigate = useNavigate()
    const chatList = useSelector(getChats)


    useEffect(() => {
        if (chatID) {
            const chats = chatList.filter(chat => chat.id === chatID)
            if (chats.length === 0) {
                navigate(ROUTES.NO_CHAT, {replace: true})
            }
        }
    }, [chatID, chatList, navigate])


    return (
        <Box sx={{
            width: '220px',
            height: '100vh',
            bgcolor: 'background.default',
            position: 'fixed',
            borderRight: '1px solid white'
        }}>
            <List component="nav" aria-label="main mailbox folders">
                {chatList.map(item => (
                    chatID && <ChatItem
                        key={item.id}
                        {...item}
                        selectedIndex={chatID}
                    />))
                }
                <AddChatModal variant={'list'}/>
            </List>
        </Box>
    )
}
