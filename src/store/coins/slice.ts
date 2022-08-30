import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCoinsResponse} from "src/types/responses";
import {fetchCoins} from "./actions";

interface RequestState {
    entities: TCoinsResponse[],
    error: string,
    currentRequestId: string | undefined,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    entities: [],
    error: '',
    currentRequestId: undefined,
    loading: 'idle',
} as RequestState


const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        cleanError(state) {
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.fulfilled, (state, action) => {
                state.entities = action.payload || []
                state.loading = 'idle'
            })
            .addCase(fetchCoins.pending, (state, action) => {
                state.loading = 'pending'
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.loading = 'failed'
            })
    }
})

export const coinsActions = coinsSlice.actions
export const coinsReducer = coinsSlice.reducer
export const {setError, cleanError} = coinsActions
