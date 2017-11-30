import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { /*compose,*/ createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory()
const middlewares = [thunkMiddleware, routerMiddleware(history)]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push( createLogger({ collapsed: true }) )
}

const store = createStore(
    reducers,
    // composeEnhancers(
        applyMiddleware(...middlewares)
    // )
)

export {
    history,
    store
}
