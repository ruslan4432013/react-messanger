import {RootState} from "../index";

export const getUserName = (state: RootState) => state.profile.name
export const getAuthStatus = (state: RootState) => state.profile.isAuth
export const getIsShowing = (state: RootState) => state.profile.showName
