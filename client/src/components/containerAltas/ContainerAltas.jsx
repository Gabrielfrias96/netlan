import React from 'react'
import {Box} from '@mui/material'
import SideBar from '../sideBar/SideBar'
import NavBar from '../navbar/NavBar'
import ControlAltas from '../controlAltas/ControlAltas'



const ContainerAltas = () => {
  return (
    <>
      <NavBar/>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        <SideBar/>
        <ControlAltas/>
      </Box>
    </>


  )
}

export default ContainerAltas