import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const Dashboard = (props) => {
  const { authState } = props

  // If there is no user logged in, redirect to login page
  if (!authState.isLoggedIn) return <Redirect to="/login" />
  return <Navbar />
}

function mapStateToProps(store) {
  return {
    authState: store.authState,
  }
}

export default connect(mapStateToProps)(Dashboard)
