import {createTheme} from '@mui/material/styles';
import {green } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#7a78f3',
            main: '#6967D2',
            dark: '#5150a8',
            contrastText: '#fff',
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: 'linear-gradient(180deg, #343361 0%, #302F4D 54.17%, #302F4D 100%)',
            paper: '#6967D2'
        }
    },
});
