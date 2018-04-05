// @flow

import * as React from 'react'

import './Loading.css'

type T_Props = {
    size?: 'big' | 'small'
}

const Loading = ({ size }: T_Props) => {
    if (size === 'big') {
        return <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"/>
            <div className="sk-cube2 sk-cube"/>
            <div className="sk-cube4 sk-cube"/>
            <div className="sk-cube3 sk-cube"/>
        </div>
    } else {
        return <div className="spinner">
            <div className="rect1"/>
            <div className="rect2"/>
            <div className="rect3"/>
            <div className="rect4"/>
            <div className="rect5"/>
        </div>
    }
}

export default Loading
