// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'
import type { TA_GetProposals } from './actions'
import Proposals from '../ui/Proposals'
import type { T_State as TS_Globals } from '../globals/reducer'
import type { T_State as TS_Proposals } from './reducer'

type T_Props = {
    globals: TS_Globals,
    proposals: TS_Proposals,
    getProposals: TA_GetProposals
}

class ProposalsContainer extends React.Component<T_Props> {
    componentDidMount() {
        const {
            proposals: {
                data: { proposals }
            }
        } = this.props

        if (!proposals) {
            this.props.getProposals()
        }
    }
    render() {
        const {
            // globals,
            proposals: {
                data: { proposals },
                ui: { fetching, error }
            }
        } = this.props

        return <Proposals fetching={fetching} error={error} proposals={proposals}/>
    }
}

// ==

const mapStateToProps = (state/*, props*/) => {
    const { globals, proposals } = state
    return { globals, proposals }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProposalsContainer)
