import React , {useState, useEffect} from 'react'
import { format, render, cancel, register } from 'timeago.js';
import { allAltasRequest } from '../../api/user'
import {filterDNIRequest} from '../../api/altas'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Box , Container ,Paper, Button, Divider, TableRow, TableHead, TableContainer, TableCell, TableBody, Table , InputBase, IconButton} from '@mui/material'

const localeFunc = (number, index, totalSec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [ 
    [ ' justo ahora ' , ' ahora mismo ' ]  ,
    [ ' Hace %s segundos ' , ' en %s segundos ' ]  ,
    [ ' hace 1 minuto ' , ' en 1 minuto ' ]  ,
    [ ' hace %s minutos ' , ' en %s minutos ' ]  ,
    [ ' hace 1 hora ' , ' en 1 hora ' ]  ,
    [ ' Hace %s horas ' , ' en %s horas ' ]  ,
    [ ' hace 1 día ' , ' en 1 día ' ]  ,
    [ ' hace %s días ' , ' en %s días ' ]  ,
    [ ' hace 1 semana ' , ' en 1 semana ' ]  ,
    [ ' hace %s semanas ' , ' en %s semanas ' ]  ,
    [ ' hace 1 mes ' , ' en 1 mes ' ]  ,
    [ ' hace %s meses ' , ' en %s meses ' ]  ,
    [ ' hace 1 año ' , ' en 1 año ' ]  ,
    [ ' Hace %s años ' , ' en %s años ' ] 
  ][index];
};
// register your locale with timeago
register('my-locale', localeFunc);




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
                  format(`${alta.timestamp}`, 'my-locale')
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