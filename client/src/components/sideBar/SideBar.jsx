import React, {useContext} from 'react'
import { anonymous } from '../../context/Anonymous'
import {Link} from 'react-router-dom'
import {Box } from '@mui/material'

const SideBar = () => {

  const {user} = useContext(anonymous)

  console.log(user)

  return (
    <Box 
    sx={{position:"sticky", top:"51px", backgroundColor:"#fefefe" , color:"#383838" , width:"180px" , height:"100vh"}}
    >
        
      
      {user.role === 'admin' || user.role === 'call' &&
      
        <Link to="/dashboard" style={{textDecoration: "none", color:"#383838" }}>
        <Box sx={{textAlign:"center", marginTop:"50px", borderTop:"solid 1px rgb(205, 211, 214)", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
            <h4>Dashboar</h4>
        </Box>
      </Link>}
      <Box sx={{textAlign:"center", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
          <h4>Altas</h4>
      </Box>
      <Box sx={{textAlign:"center", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
          <h4>Gastos</h4>
      </Box>
      <Link to="/dashboard/usuarios" style={{textDecoration:"none", color:"#383838"}}>
        <Box sx={{textAlign:"center", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
            <h4>Usuarios</h4>
        </Box>
      </Link>
      <Box sx={{textAlign:"center", borderBottom:"solid 1px rgb(205, 211, 214)"}}>
          <h4>Stock</h4>
      </Box>
      
    </Box>
  )
}

export default SideBar