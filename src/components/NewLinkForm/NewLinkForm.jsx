import React from 'react'
import { Field, withFormik } from 'formik'
import styled from 'styled-components'
import validationSchema from './validationSchema'
import { addLink } from '../../services'

import FormError from '../FormError'

const Button = styled.button`
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    45deg,
    #4a00e0 10%,
    #8e2de2 90%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #4a00e0 10%,
    #8e2de2 90%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const NewLinkForm = ({ handleSubmit, isSubmitting, errors, touched }) => {
  return (
    <div className="px-20 py-12 w-full">
      <h2 className="text-4xl mb-12 font-thin text-center">Add new Link</h2>
      <form className="text-xl" onSubmit={handleSubmit}>
        <Field
          className="block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="text"
          name="link"
          id="link"
          placeholder="Link"
        />
        <FormError message={errors.link} touched={touched.link} />

        <Field
          className="block rounded-full py-3 px-5 bg-white border border-gray-400 mx-auto w-full focus:outline-none mt-10"
          component="select"
          name="isActive"
          id="isActive"
        >
          <option value="true">Active</option>
          <option value="false">Not Active</option>
        </Field>

        <Button
          className="block rounded-full mt-10 py-3 px-5 bg-indigo-600 border border-indigo-600 mx-auto w-full text-white font-semibold"
          type="submit"
        >
          {isSubmitting ? 'Loading' : 'Sign In'}
        </Button>
      </form>
    </div>
  )
}

const EnhancedLinkForm = withFormik({
  mapPropsToValues: props => {
    return {
      link: '',
      isActive: 'true'
    }
  },
  validationSchema: validationSchema,
  handleSubmit: addLink
})(NewLinkForm)

export default EnhancedLinkForm
