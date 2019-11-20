import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { onLogout, setUser } from '../../redux/actions'
import { history } from '../../helpers'
import http from '../../apis'

import Header from '../../components/Dashboard/Header'

const Dashboard = ({ authState, onLogout, setUser }) => {
  // Check if local accessToken is still valid
  useEffect(() => {
    async function getUserInfo() {
      try {
        // Use JWT to retreive user info
        const response = await http.get('user/me')
        // Load user info in redux store
        setUser(response.data)
      } catch (error) {
        console.log({ error })
        // logging out programmatically
        console.log('Access Token is invalid')
        onLogout()
        history.push('/signin')
      }
    }
    getUserInfo()
    // eslint-disable-next-line
  }, [])

  // If there is no user logged in, redirect to sign in page
  if (!authState.isLoggedIn || !authState.user) return <Redirect to="/signin" />

  return (
    <Fragment>
      <Header />
    </Fragment>
  )
}

function mapStateToProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(mapStateToProps, {
  onLogout,
  setUser
})(Dashboard)
