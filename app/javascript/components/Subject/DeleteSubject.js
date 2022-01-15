import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import IconButton from '@mui/material/IconButton'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'


const DeleteSubject = () => {
   const id = useParams()
   const baseUrl = '/api/v1/subjects/' + id.id

   
   axios.delete(baseUrl).then(
      res=> {
         console.log(res)
      })
   

   return (
      <div>
         <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
               <AlertTitle>Subject Record Deleted!</AlertTitle>
            </Alert>
         </Stack>
         <IconButton aria-label = " ArrowBackRounded" size = 'large' href = {'/subjects'} >
            < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
         </IconButton>
      </div>
   )
}

export default DeleteSubject