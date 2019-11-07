import React, { useState, useEffect, Fragment } from 'react'
import http from '../../apis'
import Navbar from '../../components/Navbar'

const ConfirmEmail = props => {
  const [loading, setLoading] = useState(false)
  const [isConfirmed, setConfirmed] = useState(false)

  // Function called when component mounts, send token to server
  useEffect(() => {
    async function sendToken() {
      try {
        const { data } = await http.post('/confirm-email', {
          token: props.match.params.token
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    sendToken()
  })

  return (
    <Fragment>
      <Navbar position="absolute" theme="dark" />
      <section className="h-screen w-full flex items-center justify-center">
        <div className=""></div>
      </section>
    </Fragment>
  )
}

export default ConfirmEmail
