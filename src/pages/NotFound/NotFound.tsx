import {Box, Typography} from "@mui/material";

export const NotFound = ():JSX.Element => {
    return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content'
        }}>
            <Typography color='white' variant={'h1'}>Page not found</Typography>
        </Box>
    )
}
