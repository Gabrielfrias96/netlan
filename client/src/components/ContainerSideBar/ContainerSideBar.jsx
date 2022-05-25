import React from 'react'
import NavBar from '../navbar/NavBar'
import { Box , Container} from '@mui/material'
import SideBar from '../sideBar/SideBar'

const ContainerSideBar = ({children}) => {
  return (
    <>
    <NavBar/>
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'start' , alignItems: 'start'}}>
        <SideBar/>
        <Container maxWidth='md'>
          {children}
        </Container>
    </Box>
    </>
  )
}

export default ContainerSideBar