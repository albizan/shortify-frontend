import React from 'react'
import { connect } from 'react-redux'
import { Field, withFormik } from 'formik'
import validationSchema from './validationSchema'

import { setLinks, increaseLinkCount } from '../../../redux/actions'
import { addLink } from '../../../services'

import FormError from '../../FormError'

const NewLinkForm = ({ handleSubmit, isSubmitting, errors, touched }) => {
  return (
    <div className="mt-3 p-5 border-2 border-gray-200 rounded">
      <form className="text-lg" onSubmit={handleSubmit}>
        <h4 className="text-gray-700 mb-4 font-semibold">
          Please fill out the form
        </h4>
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
          placeholder="http://..."
        />
        <FormError message={errors.link} touched={touched.link} />
        <div className="flex justify-between items-center">
          <div>
            <Field
              className="w-4 h-4"
              type="checkbox"
              name="isActive"
              id="isActive"
            />
            <label className="cursor-pointer ml-2" htmlFor="isActive">
              Active
            </label>
          </div>
          <button
            className="text-gray-800 text-base bg-gray-300 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200 focus:outline-none"
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
      setLinks: props.setLinks,
      increaseLinkCount: props.increaseLinkCount
    }
  },
  validationSchema: validationSchema,
  handleSubmit: addLink
})(NewLinkForm)

export default connect(null, {
  setLinks,
  increaseLinkCount
})(EnhancedLinkForm)
