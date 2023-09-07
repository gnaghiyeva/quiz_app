import * as yup from 'yup'

export const categorySchema = yup.object().shape({
    categoryName:yup.string().required('category name is require'),

})