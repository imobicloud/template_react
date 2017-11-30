// @flow

import * as React from 'react'

type T_Props = {
    location: { pathname: string }
}

const NotFound = ({ location }: T_Props) => <div>
    <h3>No match for <code>{location.pathname}</code></h3>
</div>

export default NotFound
