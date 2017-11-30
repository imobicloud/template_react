// @flow

import { combineReducers } from 'redux'
import type { T_Action, T_Error } from '../types'
import type { TD_Proposal } from '../proposal/reducer'

type TS_Data = {
    proposals: ?Array<TD_Proposal>
}

type TS_UI = {
    fetching: boolean,
    error: ?T_Error
}

export type T_State = {
    data: TS_Data,
    ui: TS_UI
}

const initialState = {
    data: {
        proposals: null
    },
    ui: {
        fetching: false,
        error: null
    }
}

function data(state: TS_Data = initialState.data, action: T_Action): TS_Data {
    switch (action.type) {
        case 'PROPOSALS.LOAD_SUCCESS':
            return { ...state, proposals: action.data }
        default:
            return state
    }
}

function ui(state: TS_UI = initialState.ui, action: T_Action): TS_UI {
    switch (action.type) {
        case 'PROPOSALS.LOAD':
            return { ...state, fetching: true, error: null }
        case 'PROPOSALS.LOAD_SUCCESS':
            return { ...state, fetching: false, error: null }
        case 'PROPOSALS.LOAD_ERROR':
            return { ...state, fetching: false, error: action.error }
        default:
            return state
    }
}

export default combineReducers({ ui, data })
