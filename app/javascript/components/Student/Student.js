import React from 'react'
import axios from "axios"

import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { blue, red, green } from '@mui/material/colors'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const api = axios.create({baseURL: 'http://localhost:3000/api/v1/students'})

class Student extends React.Component {
   state = {
      students: []
   }

   constructor () {
      super()
      api.get('/').then(res =>{       
         this.setState({ students: res.data })
      })
   }

   render() {    
      return (
         <div>
            <IconButton aria-label = " AddBoxRounded" size = 'large'  href = {'/students/add' } >
               < AddBoxRoundedIcon sx = {{ color: blue[500] }} />
            </IconButton>        
            
            <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Matric Number</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Actions</TableCell>
                     </TableRow>
                  </TableHead>

                  <TableBody>
                     {this.state.students.map((student) => (
                        <TableRow
                           key={student.id}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell component="th" scope="row">{student.id} </TableCell>
                           <TableCell>{student.name}</TableCell>
                           <TableCell>{student.matric}</TableCell>
                           <TableCell>{student.gender}</TableCell>
                           <TableCell>
                              <Stack direction="row" spacing={1}>
                                 <IconButton aria-label = " RemoveRedEyeRounded" href = {`/students/display/${student.id}` } >
                                    < RemoveRedEyeRoundedIcon sx={{ color: green[500] }}/>
                                 </IconButton>

                                 <IconButton aria-label = "BorderColor" href = {`/students/edit/${student.id}` } >
                                    <BorderColorRoundedIcon sx={{ color: blue[500] }}/>
                                 </IconButton>

                                 <IconButton aria-label = "delete" href = {`/students/delete/${student.id}` } >
                                    <DeleteIcon sx={{ color: red[500] }}/>
                                 </IconButton>
                              </Stack>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>)
   }
}
 
export default Student
