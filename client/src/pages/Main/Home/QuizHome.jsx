import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { getAllModels } from '../../../api/requests';
import homeStyle from '../../../styles/quizhome.module.css'
const QuizHome = () => {
  const [models, setModels] = useState([])

  console.log('home-models', models)

  useEffect(() => {
    getAllModels().then((res) => {
      setModels(res.data)
    })
  }, [])

  return (
    <>
    {models && models.map((model)=>{
      return (
        <Grid container spacing={2}>
          <Grid item md={6}>
             <article className={homeStyle.homeText}>
               <h1 className={homeStyle.homeTitle}>{model.title}</h1>
              <p className={homeStyle.homeDesc}>{model.description}</p>
            </article>
           </Grid>

           <Grid item md={6}>
             <div className={homeStyle.homeImageContainer}>
               <img className={homeStyle.homeImage} src={model.image} alt='homeImage'/>
            </div>
           </Grid>
        </Grid>
      )
    })}
    </>
  
  )
}

export default QuizHome