import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { history, retreiveAccessToken } from '../../helpers'
import LoginForm from '../../components/LoginForm'
import Navbar from '../../components/Navbar'
import http from '../../apis'
import { onLogin, onLogout } from '../../redux/actions'

const Gradient = styled.div`
  color: white;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    45deg,
    #b06ab3 10%,
    #4568dc 90%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #b06ab3 10%,
    #4568dc 90%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const RegisterPage = ({ onLogin, onLogout }) => {
  useEffect(() => {
    async function checkToken() {
      try {
        // If this throw an error, access token is invalid
        await http.get('user/me')
        console.log('AccessToken is still valid, redirecting to dashboard')
        const accessToken = retreiveAccessToken()
        onLogin(accessToken)
        history.push('/dashboard')
      } catch (error) {
        // logging out programmatically
        onLogout()
      }
    }
    checkToken()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="w-full h-screen relative flex">
      <Navbar position="absolute" theme="dark" />
      <div className="h-full w-full lg:w-2/3 mt-20 lg:mt-0 flex justify-center lg:items-center">
        <LoginForm />
      </div>
      <Gradient className="h-full hidden lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-1/3">
        <div className="px-4 text-center">
          <p className="text-5xl font-semibold">New Here?</p>
          <p className="text-xl">
            Register now and start managing your links with ease
          </p>
        </div>
        <Link
          className="bg-gray-200 text-gray-800 rounded-lg px-8 py-3 mt-6 text-sm sm:text-base font-bold uppercase tracking-wide"
          to="/signup"
        >
          Sign Up
        </Link>
      </Gradient>
    </div>
  )
}

export default connect(null, {
  onLogout,
  onLogin
})(RegisterPage)
