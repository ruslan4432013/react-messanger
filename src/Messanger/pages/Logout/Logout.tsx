import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logout} from "src/store";
import {Navigate} from "react-router-dom";
import {ROUTES} from "src/config";

export const Logout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <Navigate to={ROUTES.AUTH.LOGIN}/>
    )
}
