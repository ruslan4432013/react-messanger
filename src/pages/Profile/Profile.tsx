import {Box, Typography, FormGroup, FormControlLabel, Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {switchShowUserName} from "../../store/profile/actions";

export const Profile = (): JSX.Element => {

    const isShowing = useSelector<RootState>((state) => state.profile.showName)
    const dispatch: AppDispatch = useDispatch()


    return (
        <Box color={'white'}>
            <Typography variant={'h1'}>
                Home profile
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={!!isShowing} onChange={() => dispatch(switchShowUserName())}/>}
                    label={isShowing ? 'Username is showing' : 'Username hidden'}/>
            </FormGroup>
        </Box>
    )
}
