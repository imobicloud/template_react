// @flow

import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProposalEditContainer from './edit'
import ProposalViewContainer from './view'
import NotFound from '../ui/NotFound'

const ProposalContainer = () =>
    <Switch>
        <Route exact path='/proposal' component={ProposalEditContainer}/>
        <Route path='/proposal/:id' component={ProposalViewContainer}/>
        <Route component={NotFound}/>
    </Switch>

export default ProposalContainer
