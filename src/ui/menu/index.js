// @flow

import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

import Messages from '../../i18n'

const _M = Messages.Menu

// ==

const Menu = () =>
    <ul className='menu'>
        <li>
            <NavLink exact to='/'>{_M.home}</NavLink>
        </li>
        <li>
            <NavLink to='/proposals'>{_M.proposals}</NavLink>
        </li>
    </ul>

// ==

export default Menu
