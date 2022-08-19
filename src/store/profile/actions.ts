export enum ProfileActionTypes {
    SWITCH_SHOW_USE_NAME = 'SWITCH_SHOW_USE_NAME'
}

export type TSwitchShowUserName = {
    type: ProfileActionTypes.SWITCH_SHOW_USE_NAME
}

export type ProfileActions = TSwitchShowUserName

export const switchShowUserName = (): TSwitchShowUserName => ({type: ProfileActionTypes.SWITCH_SHOW_USE_NAME})
