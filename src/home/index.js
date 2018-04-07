// @flow

import * as React from 'react'

import './Home.css'

import Messages from '../i18n'

const _M = Messages.Home

// ==

const Home = () =>
    <div className='body'>
        <label>{_M.title}</label>
    </div>

// ==

export default Home
