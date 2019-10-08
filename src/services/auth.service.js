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
    const { id, email, name } = data
    const user = JSON.stringify({ id, name, email })
    localStorage.setItem('user', user)
    setSubmitting(false)
    resetForm()
    props.setLogin(user)
  } catch (error) {
    const { status } = error.response
    if (status === 409) {
      setErrors({
        email: 'Email already used',
      })
      setSubmitting(false)
    }
  }
}
