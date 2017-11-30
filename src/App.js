// @flow

import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
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
        return <div className="app">
            <Header/>
            <Main/>
        </div>
    }
}

export default App
