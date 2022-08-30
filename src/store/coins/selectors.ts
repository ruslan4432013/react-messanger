import {RootState} from "../index";

export const getLoadingStatus = (state: RootState) => state.coins.loading
export const getCoins = (state: RootState) => state.coins.entities
export const getError = (state: RootState) => state.coins.error

