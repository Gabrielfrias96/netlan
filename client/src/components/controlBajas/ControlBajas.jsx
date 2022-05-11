import React , {useState, useEffect} from 'react'
import {allReclamosRequest} from '../../api/bajas'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Box , Container ,Paper, Button, Divider, TableRow, TableHead, TableContainer, TableCell, TableBody, Table , InputBase, IconButton} from '@mui/material'
import './bajas.scss'


const ControlBajas = () => {

    const [listReclamos , setListReclamos] = useState([])

    const pedirReclamos = async () => {

        const response = await allReclamosRequest()
        setListReclamos(response.data)
    }

    useEffect(() =>{
        pedirReclamos()
    },[])



  return (
    <>
    <Container maxWidth="md"
    >
      <Box
      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:"25px 0px"}}>
        <h2>Reclamos</h2>
        <Paper elevation={3} sx={{borderRadius:"10px" , display: 'flex', alignItems: 'center' , justifyContent: 'center', padding:"5px"}}>
          <InputBase  placeholder="Buscar por DNI" />
          <IconButton >
            <SearchOutlinedIcon/>
          </IconButton>
        </Paper>
        <Button variant="contained" color="success">Todo</Button>
      </Box>
      <Divider></Divider>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de Alta</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Direccion</TableCell>
            <TableCell align="left">DNI</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Instalador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listReclamos.map((alta) => (
            <TableRow
              key={alta._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={alta.state} component="th" scope="row">
                hola
              </TableCell>
              <TableCell className={alta.state} align="left">{alta.clientName}</TableCell>
              <TableCell className={alta.state} align="left">{alta.direction}</TableCell>
              <TableCell className={alta.state} align="left">{alta.dni}</TableCell>
              <TableCell className={alta.state} align="left">{alta.state}</TableCell>
              <TableCell className={alta.state} align="left">{`${alta.callUser} `}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Container>
    </>
  )
}

export default ControlBajas