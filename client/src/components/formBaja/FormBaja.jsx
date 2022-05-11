import React, {useState, useContext} from 'react'
import {anonymous} from "../../context/Anonymous"
import {Container, Divider , Paper, Grid, Button,  FormControl, InputLabel,Select , MenuItem , TextField , Box} from '@mui/material/'


const FormBaja = () => {
  
  const {user} = useContext(anonymous)
  const [newBaja, setNewBaja] = useState({
    type:"",
    return:"",
    payment: false,
    amount:"",
    direction: "",
    dni:"",
    phone:"",
    description:"",
    ip:"",
    instName:`${user.name} ${user.lastName}`
  })


  console.log(newBaja)
  
  const handleValues = (e) => {
    
    setNewBaja({...newBaja,[e.target.name]:e.target.value})
  }


  return (
    <>
    <Container maxWidth="lg" sx={{padding:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Paper elevation={3} sx={{width:"70%", padding:"25px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Generacion de Baja</h1>
                    <Divider/>
                </Grid>
                <Grid item xs={4} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        defaultValue=""
                        name="type"
                        label="Tipo"
                        onChange={handleValues}
                        >
                            <MenuItem value={"FTTH"}>FTTH</MenuItem>
                            <MenuItem value={"M5"}>M5</MenuItem>
                            <MenuItem value={"NA"}>NA</MenuItem>
                            <MenuItem value={"AC"}>AC</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Devolucion</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        defaultValue=""
                        name="return"
                        label="Devolucion"
                        onChange={handleValues}
                        >
                            <MenuItem value={"full"}>Completa</MenuItem>
                            <MenuItem value={"part"}>Incompleta</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pago Adicional</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        defaultValue=""
                        name="payment"
                        label="Pago Adicional"
                        onChange={handleValues}
                        >
                            <MenuItem value={true}>Si</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {
                  newBaja.payment ? 
                  <Grid item xs={6}>
                    <TextField
                    fullWidth
                    type="number"
                    name="amount"
                    label="Monto"
                    onChange={handleValues}
                    />
                  </Grid>
                  :
                  null
                }
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                    label="Direccion"
                    name="direction"
                    onChange={handleValues}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                    label="DNI"
                    name="dni"
                    onChange={handleValues}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                    label="Telefono"
                    name="phone"
                    onChange={handleValues}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                    label="IP"
                    name="ip"
                    onChange={handleValues}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Observaciones"
                    name="description"
                    onChange={handleValues}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    >
                      Registrar Baja
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
    </>
  )
}

export default FormBaja