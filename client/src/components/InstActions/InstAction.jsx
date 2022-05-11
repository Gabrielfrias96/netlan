import React from 'react'
import {Paper , Container} from '@mui/material';
import {Link} from 'react-router-dom'

const InstAction = () => {

  return (
    <>
     <Container maxWidth="lg" sx={{display:"flex", flexWrap:"wrap", justifyContent:"center" , alignContent:"center"}}>
        <Link to="/instalador/alta" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Nueva Alta
          </Paper>
        </Link>
        <Link to="/instalador/baja" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Nueva Baja
          </Paper>
        </Link>
        <Paper 
        elevation={3}
        sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
        >
            Reclamo Solucionado
        </Paper>
        <Link to="/instalador/gastos" style={{textDecoration:"none", color:"#383838"}}>
          <Paper 
          elevation={3}
          sx={{width:"180px", height:"100px", borderRadius:"20px", display:"flex" , justifyContent:"center", alignItems:"center", margin:"15px", cursor:"pointer"}}
          >
              Gastos
          </Paper>
        </Link>
     </Container>
    </>
  )
}

export default InstAction