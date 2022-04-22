import React from 'react'
import {Box} from '@mui/material'
import SideBar from '../sideBar/SideBar'
import Dashboard from '../dashboard/Dashboard'


const ContainerDashboard = () => {
  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        <SideBar/>
        <Dashboard/>
    </Box>
  )
}

export default ContainerDashboard