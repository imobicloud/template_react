// @flow

import * as React from 'react'

import type { TD_Proposal } from '../../proposal/reducer'
import Messages from '../../i18n'

type T_Props = {
    proposal: TD_Proposal
}

class View extends React.Component<T_Props> {
    render() {
        const { proposal } = this.props
        return <div className='body'>
            <label>{Messages.Proposal.View.title}</label>
            <div>{proposal.title}</div>
            <div>{proposal.body}</div>
        </div>
    }
}

export default View
