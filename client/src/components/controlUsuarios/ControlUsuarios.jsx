import React, {useState, useEffect} from 'react'
import { allUsersRequest } from '../../api/user.js'
import moment from 'moment'
import {Box , Container ,Paper, Button, Divider, TableRow, TableHead, TableContainer, TableCell, TableBody, Table} from '@mui/material'
import './controlUsuarios.scss'



const ControlUsuarios = () => {

  const [listUser, setListUser] = useState([])

  const getAllUsers = async () => {

      const result = await allUsersRequest()

      console.log(result.data)

      setListUser(result.data)
  }

  useEffect( () =>{
  
    getAllUsers()} , []
  )




  return (
    <Container maxWidth="md"
    >
      <Box
      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Usuarios</h2>
        <Button variant="contained" color="success">Crear Nuevo Usuario</Button>
      </Box>
      <Divider></Divider>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de Creacion</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">DNI</TableCell>
            <TableCell align="left">Telefono</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUser.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={user.role} component="th" scope="row">
                {moment(`${user.timestamp}`).startOf('minutes').fromNow()}
              </TableCell>
              <TableCell className={ user.role} align="left">{`${user.name} ${user.lastName}`}</TableCell>
              <TableCell className={ user.role} align="left">{user.dni}</TableCell>
              <TableCell className={ user.role} align="left">{user.phone}</TableCell>
              <TableCell className={ user.role} align="left">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Container>
  )
}

export default ControlUsuarios