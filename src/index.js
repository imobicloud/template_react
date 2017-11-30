import * as React from 'react'
import { render } from 'react-dom'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux' // https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
import { history, store } from './store'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
