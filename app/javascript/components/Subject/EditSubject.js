import axios from 'axios'
import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const EditSubject = (props) => {
   const id = useParams()
   const [Name, setName] = useState('')
   const [Data, setData] = useState('')
   const baseUrl = 'http://localhost:3000/api/v1/subjects/' + id.id
   axios.get(baseUrl).then(res => {
      setData(res.data)
   })
   
   const nameChangeHandler = (e) => {
      setName(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      
      if (Name.length == 0) {
         alert('Subject name empty!')
      } else {
         axios.put(baseUrl, {
            code: Data.code,
            name: Name
         }).then((res) => {
            console.log(res)
            alert('update successfully')
         })
      }
   }

   return (
      <div style={{width: '80%', position: 'absolute', left: '10%'}}>
         <form onSubmit={submitHandler}>
            <Stack sx={{ width: '100%' }} spacing={2}>
               <Alert severity="warning">
                  <AlertTitle>Updating:</AlertTitle>
                    <strong>Code:</strong> {Data.code} <strong>Name:</strong> {Data.name}
               </Alert>
            </Stack>
            <div>
               <TextField id="outlined-basic" label="New Name" variant="outlined" name = 'name' margin="normal" onChange={nameChangeHandler}/>
            </div>
           
            <Button variant="contained" type = 'submit'>Update</Button>

            <IconButton aria-label = " ArrowBackRounded" size = 'large' href = "/subjects" >
               < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
            </IconButton>
         </form>
      </div>
   )
}

export default EditSubject