import React, { useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { grey } from '@mui/material/colors'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const AddGrade = () => {
   const id = useParams()
   const baseUrl = 'http://localhost:3000/api/v1/students/' + id.id
   const subjectUrl = 'http://localhost:3000/api/v1/subjects/'
   const url = baseUrl + '/grades'
   const [data, setData] = useState({}) 
   const [subject, setSubject] = useState([]) 
   const [grade, setGrade] = useState([]) 
   const [Code, setCode] = useState('')
   const [Score, setScore] =useState('')

   // get subject records
   axios.get(subjectUrl).then(res => {
      setSubject(res.data)
   })
   
   //get student records
   axios.get(baseUrl).then(res => {
      setData(res.data)
   })  

   //get exam records
   axios.get(url).then(res => {
      setGrade(res.data)
   })

   const checkDuplicate = (code) => {
      const search = grade.filter(rec => rec.code == code)
      console.log(search)
      return search.length != 0
   }

   const submitHandler = (e) => {
      e.preventDefault()
      let temp = {
         code: Code,
         score: Score, 
         student_id: id.id 
      }
      if (Code == '') {
         alert('subjet code is empty, fail to create')
      } else if (Score == '') {
         alert('grade is empty, fail to create')
      } else if (checkDuplicate(Code)) {
         alert('grade for this subject already exists, check again')
      } else {
         axios.post(url, temp).then((res) => {
            console.log(res)
            alert('exam record added')
         }).catch(err => console.log(err))
      }    
   }

   const codeChangeHandler = (e) => {
      setCode(e.target.value)
   }

   const scoreChangeHandler = (e) => {
      setScore(e.target.value)
   }

   return (
      <div style={{width: '80%', position: 'absolute', left: '10%'}}>
         <form onSubmit={submitHandler}>
            <Stack sx={{ width: '100%' }} spacing={2}>
               <Alert severity="info">
                  <AlertTitle>Creating New Grade for:</AlertTitle>
                  <strong>Name:</strong> {data.name} <strong>Matric:</strong> {data.matric}
               </Alert>
            </Stack>

            <div>
            <InputLabel id="demo-simple-select-label">Code</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Code}
                  label="Code"
                  autoWidth
                  onChange={codeChangeHandler}
               >
                  {subject.map(rec => (
                     <MenuItem value={rec.code} key={rec.id}>{rec.code}</MenuItem>
                  ))}
               </Select>
            
               <InputLabel id="demo-simple-select-label">Grade</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Score}
                  label="Grade"
                  autoWidth
                  onChange={scoreChangeHandler}
               >
                  <MenuItem value={'A+'}>A+</MenuItem>
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'A-'}>A-</MenuItem>
                  <MenuItem value={'B+'}>B+</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'B-'}>B-</MenuItem>
                  <MenuItem value={'C'}>C</MenuItem>
                  <MenuItem value={'U'}>U</MenuItem>
               </Select>
            </div>

            <Button variant="contained" type = 'submit'>Create</Button>
            <IconButton aria-label = " ArrowBackRounded" size = 'large' href = {`/students/display/${id.id}`} >
               < ArrowBackRoundedIcon sx={{ color: grey[500] }}/>
            </IconButton>
         </form>
      </div>
   )
}
 
export default AddGrade
