import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TCoinsResponse} from "src/types/responses";
import {cleanError, setError} from "./slice";


export const fetchCoins = createAsyncThunk(
    'coins/fetchCoins',
    async (url: string, {dispatch}) => {
        try {
            const response = await axios.get<TCoinsResponse[]>(url)
            return response.data
        } catch (err: Error | undefined | any) {
            dispatch(setError(err.message))
            setTimeout(()=> {
                dispatch(cleanError())
            }, 15000)
        }
    }
)

