// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'

import Messages from '../i18n'

const Header = () =>
    <div className='header'>
        <label className='headerTitle'>{Messages.Header.title}</label>
        <div>
            <Link to='/'>-Home-</Link>
            <Link to='/proposals'>-Proposals-</Link>
        </div>
    </div>

export default Header
