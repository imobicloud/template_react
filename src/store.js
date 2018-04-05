// @flow

import { applyMiddleware, /*compose,*/ combineReducers, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import reducers from './reducers'

// ==

const middlewares = []

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// history
const history = createHistory()
middlewares.push(routerMiddleware(history))

// logger
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ collapsed: true }))
}

// thunk
middlewares.push(thunkMiddleware)

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    // composeEnhancers(
        applyMiddleware(...middlewares)
    // )
)

// ==

export {
    history,
    store
}
