import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const Landing = (props) => {
  return (
    <Fragment>
      <div className="w-full h-screen bg-indigo-600 relative">
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
      </div>
    </Fragment>
  )
}

export default Landing
