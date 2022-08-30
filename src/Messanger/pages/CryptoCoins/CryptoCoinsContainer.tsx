import {Box, LinearProgress} from "@mui/material";
import {useEffect} from "react";
import {CryptoCoins} from "./CryptoCoins";
import {useDispatch, useSelector} from "react-redux";
import {getLoadingStatus, getCoins, fetchCoins, getError, cleanError} from "src/store/coins";
import {AppDispatch} from "src/store";
import {API_GET_COIN_LIST} from "src/config";
import {ToastAlert} from "src/components";
import {FetchForm} from "./components";


const CryptoCoinsContainer = () => {
    const loadingStatus = useSelector(getLoadingStatus)

    const error = useSelector(getError)
    const coins = useSelector(getCoins)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCoins(API_GET_COIN_LIST))
        return () => {
            dispatch(cleanError())
        }
    }, [dispatch])

    if (coins?.length > 0) {
        return (
            <Box sx={{width: '100%'}}>
                <CryptoCoins data={coins}/>
                <ToastAlert isSuccess={true}/>
            </Box>
        )
    }

    if (loadingStatus === 'pending') {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )

    }

    if (coins.length === 0) {
        return (
            <Box sx={{width: '100%'}}>
                <FetchForm/>
                {error && <ToastAlert isSuccess={false} text={error}/>}
            </Box>
        )
    }

    return (
        <></>
    )
}

export default CryptoCoinsContainer
