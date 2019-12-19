import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = props => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <p className="mt-10 text-3xl text-gray-800">Page not Found</p>
      <Link
        className="mt-10 text-sm border-2 rounded border-gray-800 text-gray-800 font-semibold tracking-wide p-3 hover:text-gray-200 hover:bg-gray-800"
        to="/"
      >
        Go Back to Homepage
      </Link>
    </div>
  )
}

export default NotFound
