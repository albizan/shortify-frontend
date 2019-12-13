import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import validationSchema from './validationSchema'

import { setLinks } from '../../../redux/actions'
import { addLink } from '../../../services'

import FormError from '../../FormError'

const NewLinkForm = ({ handleSubmit, isSubmitting, errors, touched }) => {
  return (
    <div className="py-6">
      <form className="text-xl" onSubmit={handleSubmit}>
        <Field
          className="block rounded py-2 px-4 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <FormError message={errors.title} touched={touched.title} />

        <Field
          className="block rounded py-2 px-4 bg-white border border-gray-400 mx-auto w-full focus:outline-none"
          type="text"
          name="link"
          id="link"
          placeholder="Link"
        />
        <FormError message={errors.link} touched={touched.link} />

        {/* <Field
          className="block rounded py-2 px-4 bg-white border border-gray-400 mx-auto w-full focus:outline-none cursor-pointer"
          component="select"
          name="isActive"
          id="isActive"
        >
          <option value="true">Active</option>
          <option value="false">Not Active</option>
        </Field> */}
        <Field
          className="w-3 h-3"
          type="checkbox"
          name="isActive"
          id="isActive"
        />
        <label className="cursor-pointer" htmlFor="isActive">
          Active
        </label>

        <div className="flex justify-end">
          <button
            className="block rounded mt-5 py-3 px-5 bg-gray-200 text-gray-800 font-semibold"
            type="submit"
          >
            {isSubmitting ? 'Loading' : 'Create new Link'}
          </button>
        </div>
      </form>
    </div>
  )
}

const EnhancedLinkForm = withFormik({
  mapPropsToValues: props => {
    return {
      title: '',
      link: '',
      isActive: false,
      closePanel: props.closePanel,
      setLinks: props.setLinks
    }
  },
  validationSchema: validationSchema,
  handleSubmit: addLink
})(NewLinkForm)

export default connect(null, { setLinks })(EnhancedLinkForm)
