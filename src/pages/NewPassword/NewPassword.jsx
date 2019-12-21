import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'

import NewPasswordForm from '../../components/NewPasswordForm'

const NewPassword = props => {
  const { token } = props.match.params

  return (
    <Fragment>
      <Navbar position="absolute" theme="dark" />
      <section className="h-screen w-full flex items-center justify-center">
        <NewPasswordForm token={token} />
      </section>
    </Fragment>
  )
}

export default NewPassword
