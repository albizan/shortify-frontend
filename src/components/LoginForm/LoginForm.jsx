import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import styled from 'styled-components'
import validationSchema from './validationSchema'

import FormError from '../FormError'
import { loginUser } from '../../services'
import { onLogin, onLogout } from '../../redux/actions'

const Button = styled.button`
  border: 0;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    45deg,
    #b06ab3 10%,
    #4568dc 90%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #b06ab3 10%,
    #4568dc 90%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const RegisterForm = ({
  values,
  handleSubmit,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <div className="px-20 py-12 w-136">
      <h2 className="text-4xl mb-12 font-thin text-center">
        Sign in to your account
      </h2>
      <form className="text-xl" onSubmit={handleSubmit}>
        <Field
          className="block rounded-lg py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="e-mail"
        />
        <FormError message={errors.email} touched={touched.email} />

        <Field
          className="block rounded-lg py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <FormError message={errors.password} touched={touched.password} />

        <Button
          className="block rounded-lg mt-10 py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white font-semibold"
          type="submit"
        >
          {isSubmitting ? 'Loading' : 'Sign In'}
        </Button>
        {
          <p className="text-xl text-red-500 font-semibold text-center ">
            {values.message}
          </p>
        }
      </form>
    </div>
  )
}

const EnhancedRegisterForm = withFormik({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email || '',
      password: password || '',
      message: ''
    }
  },
  validationSchema: validationSchema,
  handleSubmit: loginUser
})(RegisterForm)

function mapStatetoProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(mapStatetoProps, {
  onLogin,
  onLogout
})(EnhancedRegisterForm)
