import React from 'react'
import { connect } from 'react-redux'
import { onLogout } from '../../../redux/actions'
import { history } from '../../../helpers'

import { FaRegEnvelope, FaCheck } from 'react-icons/fa'

const Header = ({ name, email, onLogout }) => {
  const handleLogOut = () => {
    onLogout()
    history.push('signin')
  }
  return (
    <header className="container mx-auto px-4 sm:px-0 flex items-center justify-between py-6 border-b-2 border-gray-300">
      <div>
        <h3 className="font-semibold tracking-wide text-lg text-gray-700">
          Welcome back, {name}
        </h3>
        <div className="sm:flex justify-between text-gray-600">
          <p className="mr-3">
            <FaRegEnvelope className="inline" /> {email}
          </p>
          <p>
            <FaCheck className="inline text-green-700" /> Verified Account
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogOut}
          className="text-gray-800 text-lg bg-gray-200 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200"
        >
          Log Out
        </button>
      </div>
    </header>
  )
}

function mapStateToProps(store) {
  const { name, email } = store.authState.user
  return {
    name,
    email
  }
}

export default connect(mapStateToProps, { onLogout })(Header)
