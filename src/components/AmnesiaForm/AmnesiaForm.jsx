import React from 'react'
import { Field, withFormik } from 'formik'

import FormError from '../FormError'
import { forgotPassword } from '../../services'
import validationSchema from './validationSchema'

const AmnesiaForm = ({
  values,
  handleSubmit,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <div className="px-20 py-12 w-136">
      <h2 className="text-xl mb-12 font-thin text-center">
        Please insert your email, we'll sent you an email
      </h2>
      <form onSubmit={handleSubmit}>
        <Field
          className="block rounded-lg py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          name="email"
          placeholder="email"
          type="text"
        />
        <FormError message={errors.email} touched={touched.email} />
        <button
          className="block rounded-lg py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white font-semibold"
          type="submit"
        >
          {isSubmitting ? 'Loading' : 'Submit'}
        </button>
        <p>{values.message}</p>
      </form>
    </div>
  )
}

const EnhancedAmnesiaForm = withFormik({
  mapPropsToValues: () => {
    return {
      email: '',
      message: ''
    }
  },
  validationSchema: validationSchema,
  handleSubmit: forgotPassword
})(AmnesiaForm)

export default EnhancedAmnesiaForm
