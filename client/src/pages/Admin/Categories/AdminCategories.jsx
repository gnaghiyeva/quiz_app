import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../../api/requests'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories().then((res) => {
            setCategories(res.data)
        })
    },[])

    return (
        <>
            <Grid container spacing={2}>
                {categories && categories.map((category) => {
                    return (

                        <Grid item md={4}>

                            <Card className="mt-6 w-96">
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                       Category: {category.categoryName}
                                    </Typography>
                                  
                                </CardBody>
                                <CardFooter className="pt-0 flex justify-between">
                                    <Button>Delete</Button>
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