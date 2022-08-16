import {Box, Button, Typography} from "@mui/material";
import {HomeProps} from "./Home.props";
import {Link} from 'react-router-dom'
import {RoutesConst} from "../paths";

export const Home = ({chatList}: HomeProps): JSX.Element => {


    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            width: '100%',
            alignItems: 'center',
            justifyItems: 'center'
        }}>
            <Typography color={'white'} sx={{marginBottom: 5}} variant={'h1'}>Список всех чатов</Typography>
            {chatList.map(chat => <Button component={Link}
                                          to={`${RoutesConst.CHAT}/${chat.id}`}
                                          size={'large'}
                                          variant={'outlined'}
                                          sx={{color: 'white', width: '200px', mb: 3}}
                                          key={chat.id}
            >
                {chat.name}
            </Button>)}
        </Box>
    )
}
