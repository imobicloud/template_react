// @flow

import * as React from 'react'

type T_Props = {
    children?: React.Node
}

type T_Error = {
    
}

type T_ErrorInfo = {
    componentStack: string
}

type T_State = {
    error: T_Error,
    errorInfo: T_ErrorInfo
}

/*
USAGE:
<ErrorBoundary>
    <SomeComponent/>
</ErrorBoundary>
*/
class ErrorBoundary extends React.Component<T_Props, T_State> {
    state = {
        error: {}, 
        errorInfo: { componentStack: '' } 
    }
    
    componentDidCatch(error: T_Error, errorInfo: T_ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary
