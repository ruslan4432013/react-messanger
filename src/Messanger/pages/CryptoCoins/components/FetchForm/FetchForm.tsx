import {Box, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchCoins} from "src/store/coins";
import {API_GET_COIN_LIST} from "src/config";
import {AppDispatch} from "src/store";
import {useCallback} from "react";

export const FetchForm = () => {

    const dispatch: AppDispatch = useDispatch()

    const clickHandler = useCallback(() => {
        dispatch(fetchCoins(API_GET_COIN_LIST))
    }, [dispatch])


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button
                sx={(theme) => ({
                    background: theme.palette.background.paper,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                        background: theme.palette.primary.dark
                    }
                })} onClick={clickHandler}>Try again</Button>
        </Box>
    )
}
