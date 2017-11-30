// @flow

import type { T_Action } from '../types'

export type T_State = {
    isClient: boolean
}

const initialState = {
    isClient: false
}

function data(state: T_State = initialState, action: T_Action): T_State {
    switch (action.type) {
        case 'GLOBALS.UPDATE':
            return { ...state, ...action.data }
        default:
            return state
    }
}

export default data
