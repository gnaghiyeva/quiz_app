import React, { useEffect } from 'react'
import { getAllCategories } from '../../../api/requests'
import { Button } from '@mui/material'
import { useCategoriesContext } from '../../../context/CategoriesContext'

const Categories = () => {
    const [categories, setCategories] = useCategoriesContext([])
    useEffect(()=>{
        getAllCategories().then((res)=>{
            setCategories(res.data)
        })
    })

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