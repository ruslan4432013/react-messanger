import {Box} from "@mui/material"
import {HRInputField} from "src/components/HRInputField"
import {HRButton} from "src/components/HRButton";
import {HRAuthLink} from "../components/HRAuthLink";
import {ROUTES} from "src/config";
import {ChangeEvent, useState} from "react";
import {ToastAlert} from "src/components";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {registerUser} from "src/store";
import {auth} from "src/config/firebase-config";
import {useNavigate} from 'react-router-dom'


type State = {
    email: string
    password1: string
    password2: string
}

const initState = {
    email: '',
    password1: '',
    password2: ''
} as State


export const Register = () => {

    const [state, setState] = useState<State>(initState)

    const [error, setError] = useState<string>('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (prop: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
        setState((perv) => ({
            ...perv,
            [prop]: e.target.value
        }))
    }

    const handleClick = () => {
        if (state.password1 !== state.password2) {
            setError('Пароли не совпадают')
            setTimeout(() => setError(() => ''), 3000)
        } else {
            createUserWithEmailAndPassword(auth, state.email, state.password1)
                .then((userCredential) => {
                    const user = userCredential.user
                    dispatch(registerUser(user))
                    navigate(ROUTES.AUTH.LOGIN)
                })
                .catch((error) => {
                    setError(error.message)
                })
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            top: '30vh',
            width: '430px',
            height: '100%',
            margin: '0 auto',
            gap: '20px'
        }}>
            <HRInputField onChange={handleChange('email')} id="email" label="Email" fullWidth/>

            <Box sx={{
                display: 'flex',
                gap: '10px'
            }}>
                <HRInputField onChange={handleChange('password1')} id="password1" label="Password" type="password"/>
                <HRInputField onChange={handleChange('password2')} id="password2" label="Confirm password"
                              type="password"/>
            </Box>

            <HRButton onClick={handleClick} variant="contained" fullWidth> Sign Up </HRButton>

            <HRAuthLink href={ROUTES.AUTH.LOGIN}> Already have an account? </HRAuthLink>
            {error && <ToastAlert isSuccess={false} text={error}/>}
        </Box>
    )
}
