import * as yup from 'yup'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please insert a valid email address')
})

export default validationSchema
