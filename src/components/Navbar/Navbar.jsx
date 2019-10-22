import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ position }) => {
  const [isOpen, setOpen] = useState(false)

  const renderSvgPath = () => {
    if (isOpen) {
      return (
        <path
          fillRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      )
    }
    return (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    )
  }

  const renderNavbarButton = () => {
    return (
      <button
        onClick={() => setOpen(!isOpen)}
        type="button"
        className="block text-gray-100 focus:outline-none"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {renderSvgPath()}
        </svg>
      </button>
    )
  }

  return (
    <header
      className={`${
        position === 'absolute' ? 'absolute top-0 left-0 right-0' : 'block'
      }  sm:flex sm:justify-around sm:items-center px-2 py-3`}
    >
      <div className="flex items-center justify-between sm:block px-2">
        <h2 className="text-2xl font-bold tracking-wide text-gray-200">Shortify</h2>
        <div className="sm:hidden">{renderNavbarButton()}</div>
      </div>
      <nav className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/"
          className="block mt-1 p-2 sm:m-0 sm:ml-2 text-gray-100 font-semibold rounded hover:bg-gray-800"
        >
          About
        </Link>
        <Link
          to="/login"
          className="block mt-1 p-2 sm:m-0 sm:ml-2 text-gray-100 font-semibold rounded hover:bg-gray-800"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          className="block mt-1 p-2 sm:px-5 sm:m-0 sm:ml-2 text-gray-100 font-semibold rounded sm:rounded-full border hover:bg-gray-800 hover:border-gray-800"
        >
          SIgn Up
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
