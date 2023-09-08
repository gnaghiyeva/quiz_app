import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategories } from '../../../api/requests'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories().then((res) => {
            setCategories(res.data)
        })
    },[])

    return (
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            <Button variant='outlined'><Link to={'/admin/add-category'}>Add Category</Link></Button>
        </div>
            <Grid container spacing={2}>
                {categories && categories.map((category) => {
                    return (

                        <Grid item lg={3} md={6} xs={12}>

                            <Card className="mt-6">
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                       Category: {category.categoryName}
                                    </Typography>
                                  
                                </CardBody>
                                <CardFooter className="pt-0 flex justify-between">
                                    <Button onClick={() => {
                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Yes, delete it!'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            deleteCategory(category._id).then((res) => {
                                                Swal.fire(
                                                    'Deleted!',
                                                    'Your file has been deleted.',
                                                    'success'
                                                )

                                            })
                                            setCategories(categories.filter((x) => x._id !== category._id))
                                        }
                                    })
                                }}>Delete</Button>
                                    <Button><Link to={`/admin/categories/edit/${category._id}`}>Edit</Link></Button>
                                </CardFooter>
                            </Card>
                        </Grid>
                    )
                })}


            </Grid>
        </>
    )
}

export default AdminCategories