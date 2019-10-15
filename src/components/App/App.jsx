import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RegisterPage from '../../pages/RegisterPage'
import LoginPage from '../../pages/LoginPage'
import Landing from '../../pages/Landing/Landing'
import PrivateRoute from '../PrivateRoute'
import Dashboard from '../../pages/Dashboard'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
