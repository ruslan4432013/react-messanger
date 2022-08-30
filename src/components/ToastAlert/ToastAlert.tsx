import {Alert, Snackbar} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {cleanError} from "src/store/coins";

type ToastAlertProps = {
    isSuccess: boolean
    text?: string
}

export const ToastAlert = ({isSuccess, text}: ToastAlertProps) => {

    const [open, setOpen] = useState(true);

    const dispatch = useDispatch()


    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        dispatch(cleanError())
    };

    return (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isSuccess ? 'success' : 'error'} sx={{width: '100%'}}>
            {text || 'Fetch is success'}
        </Alert>
    </Snackbar>)
}
