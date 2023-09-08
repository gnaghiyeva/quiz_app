import * as yup from 'yup'

export const modelSchema = yup.object().shape({
    image:yup.string().required('image is required'),
    title:yup.string().required('title is required').min(3),
    description:yup.string().required('description is required'),

})