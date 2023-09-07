import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../../api/requests'
import { Button } from '@mui/material'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        getAllCategories().then((res)=>{
            setCategories(res.data)
        })
    },[])

  return (
    <>
    <div style={{display:'flex', gap:'15px', padding:'20px 40px'}}>
    {categories && categories.map((category)=>{
        return (
            <Button variant="outlined">{category.categoryName}</Button>
        )
    })}
    </div>
    </>
  )
}

export default Categories