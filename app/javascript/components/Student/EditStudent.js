import React, { useEffect, useState} from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const EditStudent = () => {
   const id = useParams()
   const url = 'http://localhost:3000/api/v1/students/' + id.id
   const [data, setData] = useState({})  
   const [Name, setName] = useState('')
   const [Matric, setMatric] = useState('')
   const [Gender, setGender] = useState('')

   // get the data for current student
   axios.get(url).then(res => {
      setData(res.data)
   })  

   const submitHandler = (e) => {
      e.preventDefault()

      if (Matric.length != 9) {
         alert('invalid matric! must be a string of length 9')
      } else if (Name.length == 0) {
         alert('empty name! please input the name')
      } else if (Gender == ''){
         alert('gender not selected!')
      } else {
         axios.put(url, {
            name: Name,
            matric: Matric,
            gender: Gender
         })
         .then((res) => {
            console.log(res)
            alert('update successfully')
         })
      }
   }

   const nameChangeHandler = (e) => {
      setName(e.target.value)
   }

   const matricChangeHandler = (e) => {
      setMatric(e.target.value)
   }    

   const genderChangeHandler = (e) => {
      setGender(e.target.value)
   }    

   return (
      <div style={{width: '80%', position: 'absolute', left: '10%'}}>
 
         <form onSubmit={submitHandler}>
            <Stack sx={{ width: '100%' }} spacing={2}>
               <Alert severity="warning">
                  <AlertTitle>Updating:</AlertTitle>
                    <strong>Name:</strong> {data.name} <strong>Matric:</strong> {data.matric}
               </Alert>
            </Stack>

            <div>
               <TextField id="outlined-basic" label="New Name" variant="outlined" name = 'name' margin="normal" onChange={nameChangeHandler}/>
            </div>
            <div>
               <TextField id="outlined-basic" label="Matric" variant="outlined" name = 'matric' margin="normal" onChange={matricChangeHandler}/>
            </div>
            <div>
                  <FormControl component="fieldset" margin="normal" onChange={genderChangeHandler}>
                     <FormLabel component="legend">Gender</FormLabel>
                     <RadioGroup row aria-label="gender" name="gender">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                  </FormControl>
            </div>

            <Button variant="contained" type = 'submit'>Update</Button>

            <IconButton aria-label = " ArrowBackRounded" size = 'large' href = "/students" >
               < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
            </IconButton>
         </form>
      </div>)
}
 
export default EditStudent
