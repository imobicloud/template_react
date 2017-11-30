// @flow

// import { push } from 'react-router-redux'

import { fetchJson/*, sendJson*/ } from '../api'
import type { /*T_Action,*/ T_ThunkAction } from '../types'

const API_FIELD = 'posts'

export type TA_GetProposals = () => T_ThunkAction
const getProposals: TA_GetProposals = () => {
    return dispatch => {
        dispatch({ type: 'PROPOSALS.LOAD' })

        return fetchJson(API_FIELD)
            .then(
                data => dispatch({
                    type: 'PROPOSALS.LOAD_SUCCESS',
                    data
                }),
                error => dispatch({
                    type: 'PROPOSALS.LOAD_ERROR',
                    error
                })
            )
    }
}

export {
    getProposals
}
