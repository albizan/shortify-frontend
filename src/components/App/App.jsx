import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RegisterPage from '../../pages/RegisterPage'
import LoginPage from '../../pages/LoginPage'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props => <p>Hello</p>} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
