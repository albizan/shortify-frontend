import React, { Fragment } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import { history } from '../../helpers'

import RegisterPage from '../../pages/RegisterPage'
import LoginPage from '../../pages/LoginPage'
import Landing from '../../pages/Landing/Landing'
import ConfirmEmail from '../../pages/ConfirmEmail'
import PrivateRoute from '../PrivateRoute'
import Dashboard from '../../pages/Dashboard'
import Notfound from '../../pages/NotFound'

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/signin" component={LoginPage} />
          <Route path="/confirm-email/:token" component={ConfirmEmail} />
          <Route exact path="/not-found" component={Notfound} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect exact to="/not-found" />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
