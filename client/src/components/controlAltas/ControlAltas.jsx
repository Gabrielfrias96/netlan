import React , {useState, useEffect} from 'react'
import { allAltasRequest } from '../../api/user'
import moment from 'moment'
import {filterDNIRequest} from '../../api/altas'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Box , Container ,Paper, Button, Divider, TableRow, TableHead, TableContainer, TableCell, TableBody, Table , InputBase, IconButton} from '@mui/material'


const ControlAltas = () => {
  
  const [listAltas, setListAltas] = useState([])
  const [dni , setDni] = useState()
  const [refresh, setRefresh] = useState(false)
  
  const pedirAltas = async () => {
    
    const search = await allAltasRequest() 
    
    console.log(search.data)
    
    setListAltas(search.data)
    
  }
  
  const handleChangeDNI = (e) => {
    
    setDni(e.target.value)
  }
  
  console.log(dni)
  
  
  const filter = async (dni) => {
  
    const filter = listAltas.filter( item => item.client.dni === dni)

    setListAltas(filter)
  
    
  }
  
  
  
  
  useEffect(() => {
     pedirAltas()
   },
   [refresh])



  return (
    <>
    <Container maxWidth="md"
    >
      <Box
      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:"25px 0px"}}>
        <h2>Altas</h2>
        <Paper elevation={3} sx={{borderRadius:"10px" , display: 'flex', alignItems: 'center' , justifyContent: 'center', padding:"5px"}}>
          <InputBase onChange={handleChangeDNI} placeholder="Buscar por DNI" />
          <IconButton onClick={()=> filter(dni)}>
            <SearchOutlinedIcon/>
          </IconButton>
        </Paper>
        <Button onClick={()=> setRefresh(!refresh)} variant="contained" color="success">Todo</Button>
      </Box>
      <Divider></Divider>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de Alta</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">DNI</TableCell>
            <TableCell align="left">Telefono</TableCell>
            <TableCell align="left">Direccion</TableCell>
            <TableCell align="left">Instalador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listAltas.map((alta) => (
            <TableRow
              key={alta._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {
                  moment(alta.timestamp).format('DD/MM/YYYY')
                }
              </TableCell>
              <TableCell align="left">{alta.client.name}</TableCell>
              <TableCell align="left">{alta.client.dni}</TableCell>
              <TableCell align="left">{alta.client.phone}</TableCell>
              <TableCell align="left">{alta.client.direction}</TableCell>
              <TableCell align="left">{`${alta.installer.name} `}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Container>
    </>
  )
}

export default ControlAltas