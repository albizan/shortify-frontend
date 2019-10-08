import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Use at least 2 characters')
    .required('Please insert a name'),
  email: yup
    .string()
    .email()
    .required('Please insert a valid email address'),

  password: yup
    .string()
    .min(6, 'Use at least 6 characters')
    .required('Please insert a password'),
})

export default validationSchema
