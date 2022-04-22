import React, {useContext} from 'react'
import { anonymous} from '../../context/Anonymous'
import { newAltaRequest } from '../../api/user'
import {Container, Divider , Paper, Grid, Button,  FormControl, InputLabel,Select , MenuItem , TextField , Box} from '@mui/material/'

const FormAltas = () => {

    const {user} = useContext(anonymous)

  

    const newAlta = {
        client :{
            name : "",
            dni: "",
            phone:"", 
            direction:""
        },
        service : {
            type:"",
            ip: "",
            cardNum:"",
            plan:""
        },
        installer : {
            name: user.name, 
            lastName: user.lastName,
            dni:user.dni,
            phone:user.phone
        },
        images: [
            {
                img :""
            },
            {
                img :""
            },
            {
                img :""
            },
        ]
    }


    const handleClient = (e) => {
        const names = e.target.name
        newAlta.client[names] = e.target.value
        console.log(newAlta)
    }

    const handleService = (e) => {
        const names = e.target.name
        newAlta.service[names] = e.target.value
        console.log(newAlta)
    }


    

    
  return (
    <>
    <Container maxWidth="lg" sx={{padding:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Paper elevation={3} sx={{width:"70%", padding:"25px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Nueva Alta</h1>
                <Divider></Divider>
                </Grid>
                <Grid item xs={12} >
                    <FormControl sx={{width:"100px"}}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        defaultValue=""
                        name="type"
                        label="Tipo"
                        onChange={(e)=> {
                            newAlta.service.type = e.target.value
                            console.log(newAlta)
                        }
                        }
                        >
                            <MenuItem value={"FTTH"}>FTTH</MenuItem>
                            <MenuItem value={"M5"}>M5</MenuItem>
                            <MenuItem value={"NA"}>NA</MenuItem>
                            <MenuItem value={"AC"}>AC</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={6}> 
                    <h3>Datos del Cliente</h3>
                    <Box sx={{margin:"15px 0px"}}>
                        <TextField name="name" onChange={handleClient} variant="outlined" label="Nombre y Apellido" required />
                    </Box>
                    <Box sx={{margin:"15px 0px"}}>
                        <TextField name="dni" onChange={handleClient} variant="outlined" label="DNI" required />                     
                    </Box>
                    <Box sx={{margon:"15px 0px"}}>     
                        <TextField name="phone" onChange={handleClient} variant="outlined" label="Telefono" required />
                    </Box>
                    <Box sx={{margin:"15px 0px"}}>     
                        <TextField name="direction" onChange={handleClient} variant="outlined" label="Direccion" required />
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Datos del Servicio</h3>
                    <Box sx={{margin:"10px 0px"}}>
                        <TextField name="ip" variant="outlined" label="IP" onChange={handleService}  required />  
                    </Box>
                    <Box sx={{margin:"10px 0px"}}>
                        <TextField name="cardNum" variant="outlined" onChange={handleService} label="Numero de Tarjeta" required />   
                    </Box>
                    <Box sx={{margin:"10px 0px"}}>
                    {
                        newAlta.service.type === "FTTH" || newAlta.service.type === "M5"
                        ?   <FormControl sx={{width:"100px"}}>
                                <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                label="Plan"
                                defaultValue=""
                                onChange={(e) => { 
                                    
                                    newAlta.service.plan =  e.target.value
                                    console.log(newAlta)
                                }}
                                >
                                    <MenuItem value={"1mb"}>1mb</MenuItem>
                                    <MenuItem value={"31mn"}>3mb</MenuItem>
                                    <MenuItem value={"5mb"}>5mb</MenuItem>
                                    <MenuItem value={"10bm"}>10bm</MenuItem>
                                </Select>
                            </FormControl>

                        : <FormControl sx={{width:"100px"}}>
                                <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                defaultValue=""
                                label="Plan"
                                onChange={(e) => { 
                                    newAlta.service.plan = e.target.value
                                }}
                                >
                                    <MenuItem value={"1mb"}>1mb</MenuItem>
                                    <MenuItem value={"31mn"}>3mb</MenuItem>
                                    <MenuItem value={"5mb"}>5mb</MenuItem>
                                    <MenuItem value={"10bm"}>10bm</MenuItem>
                                </Select>
                            </FormControl>
                    }
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{margin:"10px 0px 25px 0px"}}>
                        <input type="file" onChange={(e)=> console.log(e.target.files)} multiple />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => newAltaRequest(newAlta)} variant="contained" color="success" fullWidth>Generar Alta</Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
    </>
  )
}

export default FormAltas