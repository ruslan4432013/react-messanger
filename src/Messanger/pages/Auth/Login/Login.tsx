import {HRAuthLink} from "../components/HRAuthLink";
import {ROUTES} from "src/config";
import {HRButton} from "src/components/HRButton";
import {HRInputField} from "src/components/HRInputField";
import {ChangeEvent, useEffect, useState} from "react";
import {Box} from "@mui/material";
import {ToastAlert} from "src/components";
import {getAuthStatus} from "src/store/profile/selectors";
import {useDispatch, useSelector} from "react-redux";
import { registerUser} from "src/store";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "src/config/firebase-config";
import {useNavigate} from "react-router-dom";


type State = {
    email: string
    password: string
}

const initState = {
    email: '',
    password: ''
}

export const Login = () => {

    const [state, setState] = useState<State>(initState)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const isAuth = useSelector(getAuthStatus)
    const navigation = useNavigate()

    useEffect(() => {
        if (isAuth) {
            setSuccess('You are registered success')
            setTimeout(() => {
                setSuccess(() => '')
            }, 2000)
        }
    }, [])


    const handleChange = (prop: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
        setState((perv) => ({
            ...perv,
            [prop]: e.target.value
        }))
    }

    const handleClick = () => {
        signInWithEmailAndPassword(auth, state.email, state.password)
            .then((userCredential) => {
                // Signed in
                dispatch(registerUser(userCredential.user))
                navigation(ROUTES.MAIN)

            })
            .catch((error) => {
                setError(error.message);
            });
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            top: '30vh',
            width: '370px',
            height: '100%',
            margin: '0 auto',
            gap: '20px'
        }}>
            <HRInputField
                onChange={handleChange("email")}
                label="Email"
                value={state.email}
                fullWidth
            />

            <HRInputField
                onChange={handleChange("password")}
                label="Password" type="password"
                value={state.password}
                fullWidth
            />

            <HRButton
                variant="contained"
                fullWidth
                onClick={handleClick}
            >
                Log in
            </HRButton>

            <HRAuthLink href={ROUTES.AUTH.REGISTER}> Sign Up </HRAuthLink>
            {success && <ToastAlert isSuccess text={success}/>}
            {error && <ToastAlert isSuccess={false} text={error}/>}
        </Box>
    )
}
