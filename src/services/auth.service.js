import http from '../apis'
import { history } from '../helpers'

export async function registerUser(values, { props, setSubmitting, setErrors, resetForm }) {
  // Disable submit button
  setSubmitting(true)

  try {
    const { data } = await http.post('/auth/register', {
      name: values.name,
      email: values.email,
      password: values.password,
    })

    // Store user information
    props.onLogin(data)

    // Set Form message
    props.onRegistrationCompleted('Registration complete, you can now log in')

    // Clean all form fields
    resetForm()
  } catch (error) {
    // Remove user information from redux store
    props.onLogout()

    // Check if error object has a response from server
    if (error.response) {
      const { status } = error.response
      if (status === 409) {
        setErrors({
          name: 'Email already used',
        })
      }
    } else {
      // if server doesn't respond, show an error message to the user
      props.onRegistrationFailed('Service unavailable')
    }
  } finally {
    // Enable submit button
    setSubmitting(false)
  }
}

export async function loginUser(values, { props, setSubmitting, resetForm }) {
  // Disable submit button
  setSubmitting(true)

  try {
    // Send credentials
    const { data } = await http.post('/auth/login', {
      email: values.email,
      password: values.password,
    })

    // Store user information
    props.onLogin(data)

    // Set form message in redux store
    props.onLoginCompleted('Success, you will be redirected to your dashboard')

    // Clean all form fields
    resetForm()

    // Redirect user to his dashboard
    setTimeout(() => {
      history.push('/dashboard')
    }, 1500)
  } catch (error) {
    props.onLogout()
    props.onLoginFailed('Invalid Credentials')
  } finally {
    // Enable submit button
    setSubmitting(false)
  }
}
