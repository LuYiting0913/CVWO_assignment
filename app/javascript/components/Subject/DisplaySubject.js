import React, { useEffect, useState } from 'react'
import axios from 'axios'

import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { blue, red } from '@mui/material/colors'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const DisplaySubject = () => {
   const baseUrl = '/api/v1/subjects/'
   const [subject, setsubject] = useState([])

   useEffect(() => {
      axios.get(baseUrl).then(res => {
         setsubject(res.data)
      })
   }, [])
   
   return (
         <div>
            <IconButton aria-label = " AddBoxRounded" size = 'large'  href = {'/subjects/add' } >
               < AddBoxRoundedIcon sx = {{ color: blue[500] }} />
            </IconButton>        
            
            <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Subject Code</TableCell>
                        <TableCell>Subject Name</TableCell>
                        <TableCell>Actions</TableCell>
                     </TableRow>
                  </TableHead>

                  <TableBody>
                     {subject.map((subject) => (
                        <TableRow
                           key={subject.id}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >                          
                           <TableCell>{subject.code}</TableCell>
                           <TableCell>{subject.name}</TableCell>
                           <TableCell>
                              <Stack direction="row" spacing={1}>
                                 <IconButton aria-label = "BorderColor" href = {`/subjects/edit/${subject.id}` } >
                                    <BorderColorRoundedIcon sx={{ color: blue[500] }}/>
                                 </IconButton>

                                 <IconButton aria-label = "delete" href = {`/subjects/delete/${subject.id}` } >
                                    <DeleteIcon sx={{ color: red[500] }}/>
                                 </IconButton>
                              </Stack>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
   )
}

export default DisplaySubject