// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'

import type { TD_Proposal } from '../proposal/reducer'
import Messages from '../i18n'

type TP_Proposal = {
    proposal: TD_Proposal
}

const Proposal = ({ proposal }: TP_Proposal) =>
    <li><Link to={`/proposal/${proposal.id}`}>{proposal.title}</Link></li>

type T_ProposalsProps = {
    proposals: ?Array<TD_Proposal>
}

class Proposals extends React.Component<T_ProposalsProps> {
    render() {
        const { proposals } = this.props

        let list
        if (proposals) {
            list = <ul>
                {proposals.map((proposal, index) => <Proposal key={index} proposal={proposal}/>)}
            </ul>
        }

        return <div className="body">
            <label>{Messages.Proposals.title}</label>
            {list}
        </div>
    }
}

export default Proposals
