import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { retreiveAccessToken } from '../../helpers'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      retreiveAccessToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="signin" />
      )
    }
  />
)

export default PrivateRoute
