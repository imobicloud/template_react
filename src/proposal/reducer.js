// @flow

import { combineReducers } from 'redux'
import type { T_Action, T_Error } from '../types'

export type TD_Proposal = {
    id: string,
    title: string,
    body: string,
    // time_to_complete?: string,
    // blurb: string,
    // instructions: string,
    // cta: string,
    // done_immediately: boolean,
    // feedback: string,
    // images: {
    //     full: Object,
    //     icon: Object
    // }
}

type TS_Data = {
    proposal: ?TD_Proposal
}

type TS_UI = {
    error: ?T_Error,
    fetching: boolean
}

export type T_State = {
    data: TS_Data,
    ui: TS_UI
}

const initialState = {
    data: {
        proposal: null
    },
    ui: {
        error: null,
        fetching: false
    }
}

function data(state: TS_Data = initialState.data, action: T_Action): TS_Data {
    switch (action.type) {
        case 'PROPOSAL.ADD':
            // TODO: add proposal from action.data
            return { ...state }
        case 'PROPOSAL.EDIT':
            // TODO: update proposal from action.data
            return { ...state }
        case 'PROPOSAL.LOAD_SUCCESS':
            return { ...state, ...action.data }
        default:
            return state
    }
}

function ui(state: TS_UI = initialState.ui, action: T_Action): TS_UI {
    switch (action.type) {
        case 'PROPOSAL.ADD':
        case 'PROPOSAL.EDIT':
        case 'PROPOSAL.LOAD':
            return { ...state, error: null, fetching: true }
        case 'PROPOSAL.ADD_SUCCESS':
        case 'PROPOSAL.EDIT_SUCCESS':
        case 'PROPOSAL.LOAD_SUCCESS':
            return { ...state, error: null, fetching: false }
        case 'PROPOSAL.ADD_ERROR':
        case 'PROPOSAL.EDIT_ERROR':
        case 'PROPOSAL.LOAD_ERROR':
            return { ...state, error: action.error, fetching: false }
        default:
            return state
    }
}

export default combineReducers({ ui, data })
