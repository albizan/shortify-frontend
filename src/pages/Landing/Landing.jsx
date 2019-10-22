import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const LandingBackground = styled.div`
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #4a00e0, #8e2de2); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Landing = (props) => {
  return (
    <Fragment>
      <LandingBackground className="w-full h-screen relative">
        <Navbar />
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl text-gray-100 font-bold tracking-widest">Shortify</h2>
            <h4 className="text-xl text-gray-100 font-semibold mb-10">
              Shorten and manage your links with ease
            </h4>
            <Link
              className="bg-gray-100 text-gray-800 rounded-full px-5 py-4 font-bold uppercase tracking-wide"
              to="/register"
            >
              Register Now
            </Link>
          </div>
        </div>
      </LandingBackground>
    </Fragment>
  )
}

export default Landing
