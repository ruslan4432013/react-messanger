import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {RoutesConst} from "../paths";

export const ChatNotFound = (): JSX.Element => {
    return (
        <Box sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content'
        }}>
            <Typography color='white' variant={'h1'}>Чат не найден</Typography>
            <Button component={Link} to={RoutesConst.MAIN}>Перейти к списку всех чатов</Button>
        </Box>
    )
}
