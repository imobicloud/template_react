// @flow

import type { T_Action } from '../types'
import type { T_State as TS_Globals } from './reducer'

export type TA_UpdateGlobals = (data: TS_Globals) => T_Action
const updateGlobals: TA_UpdateGlobals = data => {
    return {
        type: 'GLOBALS.UPDATE',
        data: data
    }
}

export {
    updateGlobals
}
