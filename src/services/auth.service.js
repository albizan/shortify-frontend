import http from '../apis'

export async function registerUser(values, { props, setSubmitting, setErrors, resetForm }) {
  setSubmitting(true)
  try {
    const { data } = await http.post('/auth/register', {
      name: values.name,
      email: values.email,
      password: values.password
    })
    const user = JSON.stringify(data.user)
    const jwt = JSON.stringify(data.jwt)
    localStorage.setItem('user', user)
    localStorage.setItem('jwt', jwt)
    resetForm()

    // Set user in redux store
    props.onLogin(data.user)

    // Set Form message
    props.onRegistrationCompleted('Registration complete, you can now log in')
  } catch (error) {
    // Remove user info from redux store
    props.onLogout()

    // Check if error object has a response from server
    if (error.response) {
      const { status } = error.response
      if (status === 409) {
        setErrors({
          name: 'Email already used'
        })
      }
    } else {
      // else if we cannot get a response from the server, show an error message to the user
      props.onRegistrationFailed('Service unavailable')
    }
  } finally {
    setSubmitting(false)
  }
}

export async function loginUser(values, { props, setSubmitting, resetForm }) {
  setSubmitting(true)
  try {
    const { data } = await http.post('/auth/login', {
      email: values.email,
      password: values.password
    })
    const user = JSON.stringify(data.user)
    const jwt = JSON.stringify(data.jwt)
    localStorage.setItem('user', user)
    localStorage.setItem('jwt', jwt)
    resetForm()
    // Set user in redux store
    props.onLogin(data.user)
    props.onLoginCompleted('Success, you will be redirected to your dashboard')
  } catch (error) {
    props.onLogout()
    props.onLoginFailed('Invalid Credentials')
  } finally {
    setSubmitting(false)
  }
}
