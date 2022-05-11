import React, {useContext} from 'react'
import {anonymous} from '../../context/Anonymous'
import {Box} from '@mui/material'
import SideBar from '../sideBar/SideBar'
import NavBar from '../navbar/NavBar'
import ControlBajas from '../controlBajas/ControlBajas'


const ContainerBajas = () => {

    const {user} = useContext(anonymous)

  return (
    <>
      <NavBar/>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        {user.role == 'admin' ? <SideBar/> : null}
        <ControlBajas/>
      </Box>
    </>
  )
}

export default ContainerBajas