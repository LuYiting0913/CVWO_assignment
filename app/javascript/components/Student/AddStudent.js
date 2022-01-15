import React, { Component, useState, useEffect, Fragment } from 'react'
import axios from "axios"

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

class AddStudent extends React.Component {

   changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = (e) => {
      e.preventDefault()

      if (this.state.matric.length != 9) {
         alert('invalid matric! must be a string of length 9')
      } else if (this.state.name.length == 0) {
         alert('empty name! please input the name')
      } else if (this.state.gender == ''){
         alert('gender not selected!')
      } else {
         axios.post('/api/v1/students/', {
            name: this.state.name,
            matric: this.state.matric,
            gender: this.state.gender
         })
              .then(res => {
                 console.log(res)
                 alert('Add successfully')
              })
      }
      
   }

   constructor(){
      super()
      this.state = {
         name:'',
         matric:'',
         gender:''
      }
   }

   render() { 
      const { name, matric, gender } = this.state
      return (
      <div style={{width: '80%', position: 'absolute', left: '10%'}}>
         <form onSubmit={this.submitHandler}>
            <Stack sx={{ width: '100%' }} spacing={2}>
               <Alert severity="info">
                  <AlertTitle>Creating New Student:</AlertTitle>
               </Alert>
            </Stack>

            <div>
               <TextField id="outlined-basic" label="Name" variant="outlined" name = 'name' margin="normal" onChange={this.changeHandler}/>
            </div>
            <div>
               <TextField id="outlined-basic" label="Matric" variant="outlined" name = 'matric' margin="normal" onChange={this.changeHandler}/>
            </div>
            <div>
               <FormControl component="fieldset" margin="normal" onChange={this.changeHandler}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="gender">
                     <FormControlLabel value="female" control={<Radio />} label="Female" />
                     <FormControlLabel value="male" control={<Radio />} label="Male" />
                     <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
               </FormControl>
            </div>
            <Button variant="contained" type = 'submit'>Create</Button>
            <IconButton aria-label = " ArrowBackRounded" size = 'large' href = "/students" >
               < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
            </IconButton>
         </form>         
      </div>)
   }
}
 
export default AddStudent
