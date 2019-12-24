import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { onLogout, setUser, onLogin } from '../../redux/actions'
import { history, retreiveAccessToken } from '../../helpers'
import http from '../../apis'

import Stats from '../../components/Dashboard/Stats'
import Header from '../../components/Dashboard/Header'
import LinkList from '../../components/Dashboard/LinkList'
import Pagination from '../../components/Dashboard/Pagination'

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
      <ToastContainer />
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
