import {styled} from '@mui/material/styles'

// ** Styles Imports
import {styles} from './styles'

// ** Type Imports
import type {LinkProps} from '@mui/material'
import {Link} from 'react-router-dom'
import {ROUTES} from "../../config";


export const HRLink = ({children, href, icon, ...props}: LinkProps & { icon?: any }) => {

    const StyledA = styled(Link)(() => ({
        ...styles.link
    }))

    const Icon = icon

    return (
        <StyledA to={href || ROUTES.AUTH.LOGIN} className={'link-wrapper'} onClick={props.onClick}>
            {icon ? <Icon/> : ''}
            {children}
        </StyledA>
    )
}
