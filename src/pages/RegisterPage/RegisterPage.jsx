import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm'
import Navbar from '../../components/Navbar'

const Gradient = styled.div`
  color: white;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    -30deg,
    #4a00e0 10%,
    #8e2de2 90%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    -30deg,
    #4a00e0 10%,
    #8e2de2 90%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const RegisterPage = props => {
  return (
    <div className="w-full h-screen relative flex">
      <Navbar position="absolute" theme="dark" />
      <Gradient className="h-full hidden lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-1/3">
        <div className="px-4 text-center">
          <p className="text-5xl font-semibold">One of us?</p>
          <p className="text-xl">
            If you already have an account, just sign in!
          </p>
        </div>
        <Link
          className="bg-gray-200 text-gray-800 rounded-full px-8 py-3 mt-6 text-sm sm:text-base font-bold uppercase tracking-wide"
          to="/signin"
        >
          Sign In
        </Link>
      </Gradient>
      <div className="h-full w-full lg:w-2/3 mt-20 lg:mt-0 flex justify-center lg:items-center">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
