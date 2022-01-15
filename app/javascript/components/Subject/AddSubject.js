import React, { Component, useState, useEffect, Fragment } from 'react'
import axios from "axios"

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const AddSubject = () => {
   const [Code, setCode] = useState('')
   const [Name, setName] = useState('')
   const [Data, setData] = useState([])

   axios.get('http://localhost:3000/api/v1/subjects/').then(res => {
      setData(res.data)
   })

   const checkDuplicate = (input) => {
      const allCodes = Data.map(subject => subject.code)
      const search = allCodes.filter(code => code == input)
      return search.length != 0
   }

   const submitHandler = (e)  => {
      e.preventDefault()

      if (checkDuplicate(Code)) {
         alert('subject code already exists!')
      } else if (Code.length == 0) {
         alert('empty subject code! please input subject code')
      } else if (Name.length == 0) {
         alert('empty subject name! please input subject name')
      } else {
         axios.post('http://localhost:3000/api/v1/subjects/', {
            code: Code,
            name: Name
         })
               .then(res => {
                  alert('Add successfully')
               })
      }
   }

   const codeChangeHandler = (e) => {
      setCode(e.target.value)
   }

   const nameChangeHandler = (e) => {
      setName(e.target.value)
   }

   return (
      <div style={{width: '80%', position: 'absolute', left: '10%'}}>
          <form onSubmit={submitHandler}>
             <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">
                   <AlertTitle>Creating New Subject:</AlertTitle>
                </Alert>
             </Stack>
             <div>
                <TextField id="outlined-basic" label="Subject Code" variant="outlined" name = 'code' margin="normal" onChange={codeChangeHandler}/>
             </div>
             <div>
                <TextField id="outlined-basic" label="Subject Name" variant="outlined" name = 'name' margin="normal" onChange={nameChangeHandler}/>
             </div>
             <Button variant="contained" type = 'submit'>Create</Button>

             <IconButton aria-label = " ArrowBackRounded" size = 'large' href = "/subjects" >
                < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
             </IconButton>
          </form>    
       </div>
   )
}

export default AddSubject
