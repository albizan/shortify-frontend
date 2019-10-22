import React, { Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from '../../helpers'

import RegisterPage from '../../pages/RegisterPage'
import LoginPage from '../../pages/LoginPage'
import Landing from '../../pages/Landing/Landing'
import PrivateRoute from '../PrivateRoute'
import Dashboard from '../../pages/Dashboard'

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
