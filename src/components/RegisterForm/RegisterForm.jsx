import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import validationSchema from './validationSchema'

import FormError from '../FormError'
import { registerUser } from '../../services'
import {
  onLogin,
  onLogout,
  onRegistrationCompleted,
  onRegistrationFailed,
  cleanFormState,
} from '../../redux/actions'

const RegisterForm = ({ values, handleSubmit, errors, touched, isSubmitting }) => {
  return (
    <div className="px-20 py-12 w-136">
      <h2 className="text-4xl mb-12 font-thin text-center">Create Free Account</h2>
      <form className="text-xl" onSubmit={handleSubmit}>
        <Field
          className="block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <FormError message={errors.name} touched={touched.name} />

        <Field
          className="block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="e-mail"
        />
        <FormError message={errors.email} touched={touched.email} />

        <Field
          className="block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <FormError message={errors.password} touched={touched.password} />

        <button
          className="block rounded-full mt-10 py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white"
          type="submit"
        >
          {isSubmitting ? 'Loading' : 'Sign Up'}
        </button>
        {<p className="text-xl text-red-500 font-semibold text-center ">{values.message}</p>}
      </form>
    </div>
  )
}

const EnhancedRegisterForm = withFormik({
  mapPropsToValues: ({ name, email, password }) => {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      message: '',
    }
  },
  validationSchema: validationSchema,
  handleSubmit: registerUser,
})(RegisterForm)

function mapStatetoProps(store) {
  return {
    authState: store.authState,
    formState: store.formState,
  }
}

export default connect(
  mapStatetoProps,
  {
    onLogin,
    onLogout,
    onRegistrationCompleted,
    onRegistrationFailed,
    cleanFormState,
  }
)(EnhancedRegisterForm)
