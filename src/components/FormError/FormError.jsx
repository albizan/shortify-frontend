import React from 'react'

const FormError = ({ touched, message }) => {
  return touched && message ? (
    <p className='text-red-400 mb-4 pl-5'>{message}</p>
  ) : (
    <p className='mb-4'>&nbsp;</p>
  )
}

export default FormError
