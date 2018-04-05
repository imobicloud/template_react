// @flow

import type { T_State } from './reducers'
import type { T_State as TS_Globals } from './globals/reducer'
import type { TD_Proposal } from './proposal/reducer'

// ==

type T_GetState = () => T_State
type T_PromiseAction = Promise<T_Action>
export type T_ThunkAction = (dispatch: T_Dispatch, getState: T_GetState) => any
type T_Dispatch = (action: T_Action | T_ThunkAction | T_PromiseAction) => any

// ==

export type T_Error = {
    type: string,
    message: string
}

// ==

type TA_Globals =
      { type: 'GLOBALS.UPDATE', data: TS_Globals }

type TA_Proposal =
      { type: 'PROPOSAL.ADD' }
    | { type: 'PROPOSAL.ADD_SUCCESS' }
    | { type: 'PROPOSAL.ADD_ERROR', error: T_Error }
    | { type: 'PROPOSAL.EDIT', data: TD_Proposal }
    // | { type: 'PROPOSAL.EDIT_SUCCESS' }
    // | { type: 'PROPOSAL.EDIT_ERROR', error: T_Error }
    | { type: 'PROPOSAL.LOAD' }
    | { type: 'PROPOSAL.LOAD_SUCCESS', data: TD_Proposal }
    | { type: 'PROPOSAL.LOAD_ERROR', error: T_Error }

type TA_Proposals =
      { type: 'PROPOSALS.LOAD' }
    | { type: 'PROPOSALS.LOAD_SUCCESS', data: Array<TD_Proposal> }
    | { type: 'PROPOSALS.LOAD_ERROR', error: T_Error }

// ==

export type T_Action =
      TA_Globals
    | TA_Proposal
    | TA_Proposals
