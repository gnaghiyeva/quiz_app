import React from 'react'
import { useNavigate } from 'react-router-dom'
import { postCategory } from '../../../api/requests'
import { categorySchema } from '../../../validation/categorySchema'
import { Alert, Button } from '@mui/material'
import { useFormik } from 'formik'

const AddCategory = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values, actions) => {
        await postCategory(values)
        actions.resetForm()
        navigate('/admin/categories')
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema: categorySchema,
        onSubmit: handleSubmit
    })
    return (
        <>
        <h1 style={{textAlign:'center', fontSize:'2em'}}>Adding Category</h1>
        <form onSubmit={formik.handleSubmit}>
            <div style={{ width: '60%', margin: '0 auto' }}>
                
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Category Name</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='categoryName' type='text' value={formik.values.categoryName} id="default-input" class="bg-gray-50 border border-light-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 dark:text-dark light:focus:ring-blue-500 light:focus:border-blue-500" />
                {formik.errors.categoryName && formik.touched.categoryName && (<Alert severity="warning">{formik.errors.categoryName}</Alert>)}
                <br/>
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Description</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='description' type='text' value={formik.values.description} id="default-input" class="bg-gray-50 border border-light-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 dark:text-dark light:focus:ring-blue-500 light:focus:border-blue-500" />
                {formik.errors.description && formik.touched.description && (<Alert severity="warning">{formik.errors.description}</Alert>)}

            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button type='submit' variant='contained' color='success'>Add Category</Button>
            </div>
        </form>
        </>
    )
}

export default AddCategory