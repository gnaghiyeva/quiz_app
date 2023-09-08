import React, { useEffect, useState } from 'react'
import { useHomeContext } from '../../../context/HomeModelContext';
import { useNavigate, useParams } from 'react-router-dom';
import { editModel, getModelById } from '../../../api/requests';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { modelSchema } from '../../../validation/modelSchema';
import { Alert, Button, CircularProgress } from '@mui/material';

const EditHomeTitle = () => {
  const [models, setModels] = useHomeContext({});
  console.log('category models', models)
  const { id } = useParams()
  const navigate = useNavigate()
  const [model, setModel] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getModelById(id).then((res) => {
      setModel(res.data);
      console.log('setModel', res)
      formik.values.image = res.data.image;
      formik.values.title = res.data.title;
      formik.values.description = res.data.description;
      setLoading(false);

    })
  }, [id]);


  const handleEdit = async (values, actions) => {
    setModels(values)
    await editModel(id, values)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `category section successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/admin/home-models')
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      image: model.image,
      title: model.title,
      description: model.description,

    },

    validationSchema: modelSchema,
    onSubmit: handleEdit
  })
  return (
    <>

      {loading ? <div style={{ textAlign: 'center' }}><CircularProgress color="secondary" /></div> :
        <>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ width: '60%', margin: '0 auto' }}>
              <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='image' type='text' value={formik.values.image} id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {formik.errors.image && formik.touched.image && (<Alert severity="warning">{formik.errors.image}</Alert>)}

              <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='title' type='text' value={formik.values.title} id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {formik.errors.title && formik.touched.title && (<Alert severity="warning">{formik.errors.title}</Alert>)}

              <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='description' type='text' value={formik.values.description} id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {formik.errors.description && formik.touched.description && (<Alert severity="warning">{formik.errors.description}</Alert>)}

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

export default EditHomeTitle