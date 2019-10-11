import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RegisterPage from '../../pages/RegisterPage'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props => <p>Hello</p>} />
          <Route exact path='/register' component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
