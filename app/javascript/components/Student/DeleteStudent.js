import React, { Component } from 'react';
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import IconButton from '@mui/material/IconButton'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

const DeleteStudent = (props) => { 
   const id  = useParams()
   const url = 'http://localhost:3000/api/v1/students/' + id.id
     
   axios.delete(url).then(res => {
      console.log('xx')
   })   

   return (
   <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
         <Alert severity="success">
            <AlertTitle>Student Record Deleted!</AlertTitle>
         </Alert>
      </Stack>
      <IconButton aria-label = " ArrowBackRounded" size = 'large' href = {'/students'} >
         < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
      </IconButton>
   </div>)
}
 
export default DeleteStudent;
