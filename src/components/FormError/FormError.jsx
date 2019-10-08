import React from 'react'

const FormError = ({ touched, message }) => {
  if (touched && message) {
    return <p className="text-red-400">{message}</p>
  } else {
    return <p>&nbsp;</p>
  }
}

export default FormError
