// @flow

import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './ui/header'
import NotFound from './ui/NotFound'
import Home from './home'
import ProposalContainer from './proposal'
import ProposalsContainer from './proposals'

const Main = () =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/proposal' component={ProposalContainer}/>
        <Route path='/proposals' component={ProposalsContainer}/>
        <Route component={NotFound}/>
    </Switch>

type TP_App = {}

class App extends React.Component<TP_App> {
    render() {
        return <div className='app'>
            <Header/>
            <Main/>
        </div>
    }
}

export default App
