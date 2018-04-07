// @flow

import * as React from 'react'

import './Header.css'

import Messages from '../../i18n'
import Menu from '../menu'

const _M = Messages.Header

// ==

const Header = () =>
    <div className='header'>
        <h1 className='headerTitle'>{_M.title}</h1>
        <Menu/>
    </div>

// ==

export default Header
