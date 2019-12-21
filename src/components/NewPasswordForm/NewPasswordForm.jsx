import React from 'react'
import { Field, withFormik } from 'formik'
import FormError from '../FormError'
import validationSchema from './validationSchema'

const NewPasswordForm = ({
  values,
  handleSubmit,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <div className="px-20 py-12 w-136">
      <h2 className="text-4xl mb-12 font-thin text-center">
        Choose your new password
      </h2>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="New Password"
          name="password_1"
          id="password_1"
          className="block rounded-lg py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
        />
        <FormError message={errors.password_1} touched={touched.password_1} />
        <Field
          placeholder="Type Again"
          name="password_2"
          className="block rounded-lg py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
        />
        <FormError message={errors.password_2} touched={touched.password_2} />
        <button
          className="block rounded-lg mt-10 py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white font-semibold"
          type="submit"
        >
          {isSubmitting ? 'Loading' : 'Sign Up'}
        </button>
        {values.message}
      </form>
    </div>
  )
}

const EnhancedNewPasswordForm = withFormik({
  mapPropsToValues: props => {
    return {
      password_1: '',
      password_2: '',
      token: props.token,
      message: ''
    }
  },
  validationSchema: validationSchema
})(NewPasswordForm)

export default EnhancedNewPasswordForm
