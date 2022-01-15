import React, { Component, useEffect, useState } from 'react';
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import { blue, red, green } from '@mui/material/colors';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import DeleteIcon from '@mui/icons-material/Delete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const DisplayStudent = (props) => { 
   const  id  = useParams()
   const [data, setData] = useState({})
   const [grade, setGrade] = useState([])
   const [subject, setSubject] = useState([])
   const baseUrl = 'http://localhost:3000/api/v1/students/' + id.id
   const gradeUrl = baseUrl + '/grades/'
   const subjectUrl = 'http://localhost:3000/api/v1/subjects/'

   const getSubjectName = (code) => {
      let search = subject.filter(subject => subject.code == code)

      if (search.length == 0) {
         return 'undefined, refresh the page or validate the subject code'
      } else {
         return search.map(rec => rec.name)
      }
   }

   axios.get(baseUrl).then(res => {
      setData(res.data)
   })   
   axios.get(gradeUrl).then(res => {
      const arr = res.data.map(rec => rec)
      setGrade(arr)
   })  
   axios.get(subjectUrl).then(res => {
      setSubject(res.data)
   }) 

   return (
      <div>
         <h1>Student Information</h1>
         <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Matric Number</TableCell>
                        <TableCell>Gender</TableCell>
                     </TableRow>
                  </TableHead>
               
                  <TableBody>
                     <TableRow
                        key={data.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">{data.id} </TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.matric}</TableCell>
                        <TableCell>{data.gender}</TableCell>
                        
                     </TableRow>
                  </TableBody>
               </Table>
         </TableContainer>

         <h1>Exam Results</h1>
         
         <IconButton aria-label = " AddBoxRounded" size = 'large'  href = {`/students/grades/${id.id}` } >
            < AddBoxRoundedIcon sx = {{ color: blue[500] }} />
         </IconButton> 
         
         <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Subject Code</TableCell>
                        <TableCell>Subject Name</TableCell>
                        <TableCell>Letter Grade</TableCell>
                        <TableCell>Action</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {grade.map(rec => (
                        <TableRow
                           key={rec.id}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell component="th" scope="row">{rec.code}</TableCell>
                           <TableCell>{getSubjectName(rec.code)}</TableCell>
                           <TableCell>{rec.score}</TableCell>
                           <TableCell>
                              <IconButton aria-label = "delete" href = {`/grades/delete/${rec.id}`} >
                                 <DeleteIcon sx={{ color: red[500] }}/>
                              </IconButton>
                           </TableCell>                          
                        </TableRow>                     
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
      </div>)
}
 
export default DisplayStudent
