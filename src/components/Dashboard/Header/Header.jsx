import React from 'react'
import { connect } from 'react-redux'

import { FaRegEnvelope, FaCheck, FaCogs } from 'react-icons/fa'

const Header = ({ authState }) => {
  const { name, email } = authState.user
  return (
    <header className="container mx-auto px-2 flex items-center justify-between py-8 border-b-2 border-gray-300">
      <div>
        <h3 className="font-semibold tracking-wide text-lg text-gray-700">
          Welcome back, {name}
        </h3>
        <div className="flex justify-between text-gray-600">
          <p className="mr-3">
            <FaRegEnvelope className="inline" /> {email}
          </p>
          <p>
            <FaCheck className="inline text-green-700" /> Verified Account
          </p>
        </div>
      </div>
      <div>
        <button className="mr-6 focus:outline-none">
          <FaCogs className="inline text-xl text-gray-600 hover:text-gray-800" />
        </button>
        <button className="text-gray-800 text-sm bg-gray-200 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200">
          Log Out
        </button>
      </div>
    </header>
  )
}

function mapStateToProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(mapStateToProps)(Header)
