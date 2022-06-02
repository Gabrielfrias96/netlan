import React , {useContext} from 'react'
import {anonymous} from '../../context/Anonymous'
import {createGastoRequest} from '../../api/gastos'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { Container , Paper, Grid, FormControl, Select, MenuItem, InputLabel, TextField, Button } from '@mui/material'

const FormGastos = (props) => {

  const {user} = useContext(anonymous)

  let newTicket = {
    type:"",
    description: "",
    amount:"",
    instName: user.name,
    instLastName: user.lastName
  }



  const handleValue = (e) => {

      newTicket[e.target.name] = e.target.value

      console.log(newTicket)
  }

  const handleSubmit =  () => {

    createGastoRequest(newTicket)
    .then(res => {
      console.log(res)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El Ticket se Genero correctamente.',
        showConfirmButton: false,
        timer: 2000
      })
    })

    
  }



  return (
    <>
    <Container maxWidth="lg" sx={{padding:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Paper elevation={3} sx={{width:"70%", padding:"25px" }}>
          <Grid container spacing={3}>
            <Grid item  xs={12} >
              <h1>Tickets</h1>
            </Grid>
            <Grid item xs={12}>
                    <FormControl sx={{width:"100px"}}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        defaultValue=""
                        name="service_type"
                        label="Tipo"
                        onChange= {(e)=>{
                          newTicket.type = e.target.value
                          console.log(newTicket)
                        }}
                        >
                            <MenuItem value={"others"}>Otros</MenuItem>
                            <MenuItem value={"ferreteria"}>Ferreteria</MenuItem>
                        </Select>
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField name="description" label="Motivo" onChange={handleValue} />
            </Grid>
            <Grid item xs={12}>
              <TextField type="number" name="amount" label="Monto" onChange={handleValue} />
            </Grid>
            <Grid item xs={12}>
              <Link to='/'><Button variant="contained" color="success" onClick={handleSubmit}>Generar Ticket</Button></Link>
            </Grid>

          </Grid>
        </Paper>
    </Container>
    </>
  )
}

export default FormGastos