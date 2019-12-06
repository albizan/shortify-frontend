import * as yup from 'yup'

const validationSchema = yup.object().shape({
  link: yup.string().required('Please insert a valid link')
})

export default validationSchema
