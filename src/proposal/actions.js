// @flow

// import { push } from 'react-router-redux'

import { fetchJson, sendJson } from '../api'
import type { T_Action, T_ThunkAction } from '../types'
import type { TD_Proposal } from './reducer'

const API_FIELD = 'posts'

export type TA_AddProposal = (proposal: TD_Proposal) => T_ThunkAction
const addProposal: TA_AddProposal = proposal => {
    return dispatch => {
        dispatch({ type: 'PROPOSAL.ADD' })

        return sendJson('post', API_FIELD, proposal)
            .then(() => {
                // dispatch( push('/') ) // route to Home?
                dispatch({ type: 'PROPOSAL.ADD_SUCCESS' })
            })
            .catch(error => {
                dispatch({
                    type: 'PROPOSAL.ADD_ERROR',
                    error
                })
            })
    }
}

export type TA_EditProposal = (proposal: TD_Proposal) => T_Action
const editProposal: TA_EditProposal = proposal => {
    return {
        type: 'PROPOSAL.EDIT',
        data: proposal
    }
}

export type TA_GetProposal = (id: string) => T_ThunkAction
const getProposal: TA_GetProposal = id => {
    return dispatch => {
        dispatch({ type: 'PROPOSAL.LOAD' })

        return fetchJson(`${API_FIELD}/${id}`)
            .then(data => {
                dispatch({
                    type: 'PROPOSAL.LOAD_SUCCESS',
                    data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'PROPOSAL.LOAD_ERROR',
                    error
                })
            })
    }
}

export {
    addProposal,
    editProposal,
    getProposal
}
