import React from 'react'
import {Paper , Container} from '@mui/material';
import {Link} from 'react-router-dom'

const CallActions = () => {
  return (
    <>
     <Container maxWidth="lg" sx={{display:"flex", flexWrap:"wrap", justifyContent:"center" , alignContent:"center"}}>
        <Link to="/altas" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Ver Altas
          </Paper>
        </Link>
        <Link to="/bajas" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Ver Reclamos
          </Paper>
        </Link>
        <Link to="/pedido/altas" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Pedir Alta
          </Paper>
        </Link>
        <Link to="/reclamos" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Generar Reclamo
          </Paper>
        </Link>
     </Container>
    </>
  )
}

export default CallActions