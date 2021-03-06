import React, {useContext} from 'react'
import {anonymous} from '../../context/Anonymous'
import {Box} from '@mui/material'
import SideBar from '../sideBar/SideBar'
import NavBar from '../navbar/NavBar'
import ControlAltas from '../controlAltas/ControlAltas'



const ContainerAltas = () => {

  const {user} = useContext(anonymous)

  return (
    <>
      <NavBar/>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        {user.role == 'admin' ? <SideBar/> : null}
        <ControlAltas/>
      </Box>
    </>


  )
}

export default ContainerAltas