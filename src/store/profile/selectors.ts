import {RootState} from "../index";

export const getUserName = (state: RootState) => state.profile.name
export const getIsShowing = (state: RootState) => state.profile.showName
