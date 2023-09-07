import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCategoriesContext } from '../../../context/CategoriesContext';
import { editCategory, getCategoryById } from '../../../api/requests';
import Swal from "sweetalert2";
import { useFormik } from 'formik';
import { categorySchema } from '../../../validation/categorySchema';
import { Alert, Button, CircularProgress } from '@mui/material';

const EditCategories = () => {
    const [categories, setCategories] = useCategoriesContext({});
    console.log('category context', categories)
    const { id } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategoryById(id).then((res) => {
            setCategory(res.data);
            console.log('setCategory', res)
            formik.values.categoryName = res.data.categoryName;
            setLoading(false);

        })
    }, [id]);


    const handleEdit = async (values, actions) => {
        setCategories(values)
        await editCategory(id, values)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `category section successfully`,
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/admin/categories')
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            categoryName: category.categoryName,
        },

        validationSchema: categorySchema,
        onSubmit: handleEdit
    })
    return (
        <>

            {loading ? <div style={{ textAlign: 'center' }}><CircularProgress color="secondary" /></div> :
                <>
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{width:'60%', margin:'0 auto'}}>
                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='categoryName' type='text' value={formik.values.categoryName} id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {formik.errors.categoryName && formik.touched.categoryName && (<Alert severity="warning">{formik.errors.categoryName}</Alert>)}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button type='submit' variant='contained' color='success'>Edit</Button>
                        </div>
                    </form>
                </>
            }

        </>
    )
}

export default EditCategories