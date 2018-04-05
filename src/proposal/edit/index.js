// @flow

// import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import ProposalEditContainer from '../../ui/Proposal/Edit'

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
)(ProposalEditContainer)
