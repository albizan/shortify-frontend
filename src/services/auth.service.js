import http from '../apis'

export async function registerUser(
  values,
  { props, setSubmitting, setErrors, resetForm }
) {
  setSubmitting(true)
  try {
    const { data } = await http.post('/auth/register', {
      name: values.name,
      email: values.email,
      password: values.password,
    })
    const user = JSON.stringify(data.user)
    const jwt = JSON.stringify(data.jwt)
    localStorage.setItem('user', user)
    localStorage.setItem('jwt', jwt)
    resetForm()
    // Set user in redux store
    props.setLogin(user)
  } catch (error) {
    const { status } = error.response
    if (status === 409) {
      setErrors({
        email: 'Email already used',
      })
    }
  } finally {
    setSubmitting(false)
  }
}
