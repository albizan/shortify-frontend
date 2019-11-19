import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { onLogout } from '../../redux/actions'
import { history } from '../../helpers'
import http from '../../apis'

const Dashboard = ({ authState, onLogout }) => {
  const [user, setUser] = useState(undefined)

  // Check if local accessToken is still valid
  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await http.get('user/me')
        setUser(response.data)
      } catch (error) {
        // @todo logout programmatically
        onLogout()
        history.push('/signin')
      }
    }
    getUserInfo()
  }, [])

  // If there is no user logged in, redirect to sign in page
  if (!authState.isLoggedIn) return <Redirect to="/signin" />

  if (!user) {
    return null
  }

  return (
    <Fragment>
      <div>
        <p>Welcome Back {user ? user.name : 'Anonymous'}</p>
      </div>
    </Fragment>
  )
}

function mapStateToProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(mapStateToProps, {
  onLogout
})(Dashboard)
