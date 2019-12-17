import React from 'react'
import { connect } from 'react-redux'
import { onLogout } from '../../../redux/actions'
import { history } from '../../../helpers'

import { FaRegEnvelope, FaCheck, FaCogs } from 'react-icons/fa'

const Header = ({ name, email, onLogout }) => {
  const handleLogOut = () => {
    onLogout()
    history.push('signin')
  }
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
        <button
          onClick={handleLogOut}
          className="text-gray-800 text-sm bg-gray-200 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200"
        >
          Log Out
        </button>
      </div>
    </header>
  )
}

function mapStateToProps(store) {
  return {
    ...store.authState
  }
}

export default connect(mapStateToProps, { onLogout })(Header)
