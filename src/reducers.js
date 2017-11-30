// @flow

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// ==

import globals from './globals/reducer'
import type { T_State as TS_Globals } from './globals/reducer'

import proposal from './proposal/reducer'
import type { T_State as TS_Proposal } from './proposal/reducer'

import proposals from './proposals/reducer'
import type { T_State as TS_Proposals } from './proposals/reducer'

// ==

export type T_State = {
    globals: TS_Globals,
    proposal: TS_Proposal,
    proposals: TS_Proposals
}

// ==

const reducers = combineReducers({
    globals,
    proposal,
    proposals,
    router: routerReducer
})

export default reducers
