import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const LandingBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  user-select: none;
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

const Landing = props => {
  return (
    <LandingBackground>
      <Navbar position="absolute" theme="white" />
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center px-4 mt-20">
          <h1 className="text-4xl sm:text-5xl text-white font-bold tracking-widest">
            Shortify
          </h1>
          <h2 className="text-base sm:text-xl text-white mb-12 font-semibold tracking-wide">
            Shorten and manage your links with ease
          </h2>
          <Link
            className="bg-gray-200 text-gray-800 rounded-lg p-4 text-sm sm:text-base font-bold uppercase tracking-widest"
            to="/signup"
          >
            Register Now
          </Link>
        </div>
      </div>
    </LandingBackground>
  )
}

export default Landing
