import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import validationSchema from './validationSchema'

import FormError from '../FormError'
import { registerUser } from '../../services'
import { setLogin, setLogout } from '../../redux/actions'

const RegisterForm = ({ handleSubmit, errors, touched, authState }) => {
  return (
    <div className='px-20 py-12 w-136 rounded-lg shadow-lg border border-gray-300'>
      <h2 className='text-4xl mb-12 font-thin text-center'>Create Your Account</h2>
      <form className='text-xl' onSubmit={handleSubmit}>
        <Field
          className='block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <FormError message={errors.name} touched={touched.name} />

        <Field
          className='block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full'
          type='email'
          name='email'
          id='email'
          placeholder='e-mail'
        />
        <FormError message={errors.email} touched={touched.email} />

        <Field
          className='block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <FormError message={errors.password} touched={touched.password} />

        <button
          className='block rounded-full mt-10 py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white'
          type='submit'
        >
          Sign Up
        </button>
        {authState.isLoggedIn && (
          <p className='text-lg font-semibold'>
            Thank you, you will be redirected to your dashboard
          </p>
        )}
      </form>
    </div>
  )
}

const EnhancedRegisterForm = withFormik({
  mapPropsToValues: ({ name, email, password, authState }) => {
    return {
      name: name || '',
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: validationSchema,
  handleSubmit: registerUser
})(RegisterForm)

function mapStatetoProps(store) {
  return {
    authState: store.authState
  }
}

export default connect(
  mapStatetoProps,
  {
    setLogin,
    setLogout
  }
)(EnhancedRegisterForm)
