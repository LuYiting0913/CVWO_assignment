import React, { useState } from 'react';
import { Link,  Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from './Home/Home'
import Student from './Student/Student'
import AddStudent from './Student/AddStudent'
import DisplayStudent from './Student/DisplayStudent'
import DeleteStudent from './Student/DeleteStudent'
import EditStudent from './Student/EditStudent'
import AddGrade from './Grade/AddGrade'
import DeleteGrade from './Grade/DeleteGrade'
import DisplaySubject from './Subject/DisplaySubject'
import AddSubject from './Subject/AddSubject'
import EditSubject from './Subject/EditSubject'
import DeleteSubject from './Subject/DeleteSubject'

import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded'

const App = () => {
  const [value, setValue] = useState(0)
    
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation value={0} 
          showLabels 
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} component={Link} to={"/"}/>
          <BottomNavigationAction label="Student" icon={<PeopleAltRoundedIcon />} component={Link} to={"/students"} />
          <BottomNavigationAction label="Subject" icon={<BookmarksRoundedIcon />} component={Link} to={"/subjects"}/>
        </BottomNavigation>
      </Box>

      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route path = "/students" element={<Student />} />
        <Route path = "/students/add" element={<AddStudent />} />
        <Route path = "/students/display/:id" element={<DisplayStudent />} />
        <Route path = "/students/delete/:id" element={<DeleteStudent />} />
        <Route path = "/students/edit/:id" element={<EditStudent />} />
        <Route path = "/students/grades/:id" element={<AddGrade />} />
        <Route path = "/grades/delete/:id" element={<DeleteGrade />} />
        <Route path = "/subjects" element={<DisplaySubject />} />
        <Route path = "/subjects/add" element={<AddSubject />} />
        <Route path = "/subjects/edit/:id" element={<EditSubject />} /> 
        <Route path = "/subjects/delete/:id" element={<DeleteSubject />} /> 
      </Routes>
    </div>
  )

}

export default App
