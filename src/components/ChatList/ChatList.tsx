import {ChatItemProps} from "./ChatList.props";
import {useState, MouseEvent} from "react";
import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {chatListMock} from "../../mock/ChatListMock";

const ChatItem = ({id, name, selectedIndex, handleListItemClick}: ChatItemProps): JSX.Element => {
    return (
        <ListItemButton
            sx={{
                '&.Mui-selected': {
                    background: (theme) => theme.palette.background.paper
                }
            }}
            selected={selectedIndex === id}
            onClick={(event) => handleListItemClick(event, id)}
        >
            <ListItemText sx={{color: (theme) => theme.palette.primary.contrastText}} primary={name}/>
        </ListItemButton>
    )
}


export const ChatList = (): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (
        event: MouseEvent,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Box sx={{
            width: '220px',
            height: '100vh',
            bgcolor: 'background.default',
            position: 'fixed',
            borderRight: '1px solid white'
        }}>
            <List component="nav" aria-label="main mailbox folders">
                {chatListMock.map(item => (
                    <ChatItem
                        key={item.id}
                        {...item}
                        handleListItemClick={handleListItemClick}
                        selectedIndex={selectedIndex}
                    />))
                }
            </List>
        </Box>
    )
}
