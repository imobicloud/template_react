// @flow

import * as React from 'react'

import './SearchBar.css'

const iconSearch = require('./images/search@3x.png')

type T_Props = {
    placeholder?: string,
    showIcon?: boolean,
    onChange?: Function,
    // onFocus?: Function,
    // onSubmit?: Function
}

type T_State = {
    value: string
}

class SearchBar extends React.Component<T_Props, T_State> {
    state = {
        value: ''
    }
    
    handleChange: Function
    // handleFocus: Function
    // handleSubmit: Function
    
    componentWillMount() {
        this.handleChange = this.handleChange.bind(this)
        // this.handleFocus = this.handleFocus.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    // componentDidMount() {}
    
    handleChange(e: SyntheticInputEvent<>) {
        const { onChange } = this.props
        const value = e.target.value
        this.setState({ value })
        onChange && onChange({ value })
    }

    // handleFocus(e: SyntheticInputEvent<>) {
    //     const { onFocus } = this.props
    //     onFocus && onFocus()
    // }

    // handleSubmit(e: SyntheticInputEvent<>) {
    //     const { onSubmit } = this.props
    //     e.preventDefault()
    // }
    
    render() {
        const { placeholder, showIcon } = this.props

        let style
        if (showIcon) {
            style = { 
                backgroundImage: `url(${iconSearch})`, 
                backgroundPosition: '10px center',
                backgroundSize: '16px 17px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: 31 }
        }

        return <form className='display-row ui-SearchBar' style={style}>
            <input className='f-input ui-SearchBar-input' type='text' 
                placeholder={placeholder} 
                onChange={this.handleChange} value={this.state.value}/>
        </form>    

        // <form onSubmit={this.handleSubmit} />

        // <input className='f-input ui-SearchBar-input' type='text' 
        //     placeholder={placeholder} 
        //     onChange={this.handleChange} value={this.state.value}/>

        // <input className='f-input ui-SearchBar-input' type='text' 
        //     placeholder={placeholder}
        //     onFocus={this.handleFocus}/>
    }
}

export default SearchBar
