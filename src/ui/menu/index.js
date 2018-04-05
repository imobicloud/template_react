// @flow

import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

import Messages from '../../i18n'

const Menu = () =>
    <ul className='menu'>
        <li>
            <NavLink exact to='/'>{Messages.Menu.home}</NavLink>
        </li>
        <li>
            <NavLink to='/proposals'>{Messages.Menu.proposals}</NavLink>
        </li>
    </ul>

export default Menu
