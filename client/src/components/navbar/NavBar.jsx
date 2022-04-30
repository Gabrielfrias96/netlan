import React, {useContext} from 'react'
import {anonymous} from '../../context/Anonymous'
import { Container, Box,  } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom';

const NavBar = () => {

  const { user } = useContext(anonymous)

console.log('Se renderizo el Navbar')

  return (
    <Box sx={{zIndex:"100",position:"sticky", top:"0px" ,width:"100%", height:"50px",backgroundColor:"#fefefe", display: "flex", justifyContent:"center", alignItems:"center", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
        <Container maxWidth="lg" sx={{overFlow:"hidden", display: "flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <Link style={{textDecoration:"none" , color:"#383838"}} to="/"><h2>NetLan</h2></Link>
        </Box>
        <Box sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            {`${user.name} ${user.lastName} `}
            <AccountCircleOutlinedIcon/> 
        </Box>
        </Container>
    </Box>
  )
}

export default NavBar