import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import validationSchema from './validationSchema'

import FormError from '../FormError'
import { registerUser } from '../../services'
import { setLogin, setLogout } from '../../redux/actions'

const RegisterForm = ({ handleSubmit, errors, touched, authState }) => {
  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Field
        className="block rounded p-1 bg-white border border-gray-300"
        type="text"
        name="name"
        id="name"
        placeholder={'Insert Name'}
      />
      <FormError message={errors.name} touched={touched.name} />

      <label htmlFor="email">Email</label>
      <Field
        className="block rounded p-1 bg-white border border-gray-300"
        type="email"
        name="email"
        id="email"
        placeholder={'Insert email'}
      />
      <FormError message={errors.email} touched={touched.email} />

      <label htmlFor="password">Password</label>
      <Field
        className="block bg-whit p-1 border border-gray-300"
        type="password"
        name="password"
        id="password"
      />
      <FormError message={errors.password} touched={touched.password} />

      <button
        className="bg-blue-500 py-2 px-3 rounded text-white font-semibold uppercase"
        type="submit"
      >
        Submit
      </button>
      {authState.isLoggedIn && (
        <p className="text-lg font-semibold">
          Registration Completed, you will be redirected to your dashboard
        </p>
      )}
    </form>
  )
}

const EnhancedRegisterForm = withFormik({
  mapPropsToValues: ({ name, email, password, authState }) => {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
    }
  },
  validationSchema: validationSchema,
  handleSubmit: registerUser,
})(RegisterForm)

function mapStatetoProps(store) {
  return {
    authState: store.authState,
  }
}

export default connect(
  mapStatetoProps,
  {
    setLogin,
    setLogout,
  }
)(EnhancedRegisterForm)
