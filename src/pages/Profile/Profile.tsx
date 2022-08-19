import {Box, Typography, FormGroup, FormControlLabel, Switch} from "@mui/material";
import {useSelector} from "react-redux";
import {switchShowName} from "../../store";
import {getIsShowing} from "../../store/profile/selectors";


export const Profile = (): JSX.Element => {

    const isShowing = useSelector(getIsShowing)


    return (
        <Box color={'white'}>
            <Typography variant={'h1'}>
                Home profile
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={isShowing} onChange={switchShowName}/>}
                    label={isShowing ? 'Username is showing' : 'Username hidden'}/>
            </FormGroup>
        </Box>
    )
}
