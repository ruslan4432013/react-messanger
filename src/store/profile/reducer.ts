import {Reducer} from "@reduxjs/toolkit";
import {ProfileActions, ProfileActionTypes} from "./actions";

export type State = {
    showName: boolean
    name: string
}

const initialState: State = {
    showName: false,
    name: 'Default'
}

export const profileReducer: Reducer<State, ProfileActions> = (state = initialState, action) => {
    switch (action.type) {
        case ProfileActionTypes.SWITCH_SHOW_USE_NAME:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}
