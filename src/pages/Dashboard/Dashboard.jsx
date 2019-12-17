import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

import { onLogout, setUser, onLogin } from '../../redux/actions'
import { history, retreiveAccessToken } from '../../helpers'
import http from '../../apis'

import Stats from '../../components/dashboard/Stats'
import Header from '../../components/dashboard/Header'
import LinkList from '../../components/dashboard/LinkList'
import Pagination from '../../components/dashboard/Pagination'

const Dashboard = ({ authState, onLogin, onLogout, setUser }) => {
  // Check if local accessToken is still valid
  useEffect(() => {
    async function getUserInfo() {
      try {
        // Use JWT to retreive user info
        const response = await http.get('user/me')
        // If no error is thrown, jwt is still valid. Load user info in redux store
        setUser(response.data)
        // Retreive access token and update redux store
        onLogin(retreiveAccessToken())
      } catch (error) {
        // logging out programmatically
        console.log('Access Token is invalid')
        onLogout()
        history.push('/signin')
      }
    }
    console.log('Dashboard mounted')
    getUserInfo()
    // eslint-disable-next-line
  }, [])
  // If there is no user logged in, redirect to sign in page
  if (!authState.isLoggedIn || !authState.user) return null

  return (
    <Fragment>
      <Header />
      <Stats />
      <LinkList />
      <Pagination />
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
  setUser,
  onLogin
})(Dashboard)
