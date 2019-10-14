import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = props => {
  return (
    <Fragment>
      <div className="w-full h-screen text-center">
        <div className="h-half w-full bg-indigo-600 text-white flex items-center justify-center text-3xl">
          Wecome To Shorter
        </div>
        <div className="h-half w-full flex flex-col items-center justify-center">
          <Link
            to="register"
            className="cursor-pointer w-40 border border-indigo-600 rounded-full p-3 m-3"
          >
            Register
          </Link>
          <Link
            to="login"
            className="cursor-pointer w-40 border border-indigo-600 rounded-full p-3 m-3"
          >
            Log In
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing
