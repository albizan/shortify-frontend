import * as yup from 'yup'

const validationSchema = yup.object().shape({
  link: yup
    .string()
    .url('A valid url must begin with http://')
    .required('Please insert a valid link')
})

export default validationSchema
