import React from 'react'
import { connect } from 'react-redux'

const Header = ({ authState }) => {
  return (
    <header>
      <p>Hello {authState.user.name}</p>
    </header>
  )
}

function mapStateToProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(mapStateToProps)(Header)
