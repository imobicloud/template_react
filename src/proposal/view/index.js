// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import type { /*Location as T_Location,*/ Match as T_Match } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import type { TA_GetProposal } from '../actions'
import Loading from '../../ui/Loading'
import View from '../../ui/Proposal/View'
// import type { T_State as TS_Globals } from '../../globals/reducer'
import type { T_State as TS_Proposal } from '../reducer'

type T_Props = {
    // globals: TS_Globals,
    // location: T_Location,      // passed params via router state - push('/search/category/1', { name: 'TODO' })
    match: T_Match,               // passed params via router url - push('/search/category/1')
    proposal: TS_Proposal,
    getProposal: TA_GetProposal
}

class ProposalViewContainer extends React.Component<T_Props> {
    getProposal: () => void

    constructor(props) {
        super(props)
        this.getProposal = this.getProposal.bind(this)
    }

    componentDidMount() {
        this.getProposal()
    }

    getProposal() {
        const {
            proposal: {
                data: { proposal },
            },
            // location: { state: { name } },
            match: { params: { id } }
        } = this.props
        if (proposal == null) {
            this.props.getProposal(id)
        }
    }

    render() {
        const {
            // globals,
            proposal: {
                data: { proposal },
                ui: { fetching, error }
            }
        } = this.props

        if (proposal) {
            return <View fetching={fetching} error={error} proposal={proposal}/>
        } else {
            return <Loading/>
        }
    }
}

// ==

const mapStateToProps = (state, props) => {
    const { /*globals,*/ proposal } = state
    return { /*globals,*/ proposal }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProposalViewContainer)
