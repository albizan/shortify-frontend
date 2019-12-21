import * as yup from 'yup'

const validationSchema = yup.object().shape({
  password_1: yup
    .string()
    .min(6, 'Use at least 6 characters')
    .required('Please insert a password'),
  password_2: yup
    .string()
    .oneOf([yup.ref('password_1'), null], "Passwords don't match")
    .required('Please insert a password')
})

export default validationSchema
