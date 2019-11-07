import React, { useState, useEffect, Fragment } from 'react'
import http from '../../apis'
import Navbar from '../../components/Navbar'

const ConfirmEmail = props => {
  const [loading, setLoading] = useState(false)
  const [isVerified, setVerified] = useState(false)

  // Function called when component mounts, send token to server
  useEffect(() => {
    async function sendToken() {
      try {
        setLoading(true)
        const { token } = props.match.params
        const result = await http.get(`mail/confirm/${token}`)
        if (result.status === 200) {
          console.log('Received OK')
          setVerified(true)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    sendToken()
  }, [props.match.params.token])

  return (
    <Fragment>
      <Navbar position="absolute" theme="dark" />
      <section className="h-screen w-full flex items-center justify-center">
        {loading && <p className="text-xl">Please wait</p>}
        {isVerified && (
          <p className="text-xl">Account verified, you can now log in</p>
        )}
      </section>
    </Fragment>
  )
}

export default ConfirmEmail
