import React from 'react'
import {Box} from '@mui/material'
import SideBar from '../sideBar/SideBar'
import NavBar from '../navbar/NavBar'
import ControlUsuarios from '../controlUsuarios/ControlUsuarios'


const ContainerUsuarios = () => {


  return (
    <>
    <NavBar/>
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        <SideBar/>
        <ControlUsuarios/>
    </Box>
    </>
  )
}

export default ContainerUsuarios