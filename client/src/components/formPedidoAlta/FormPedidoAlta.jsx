import React from 'react'
import {Container, Divider , Paper, Grid, Button,  FormControl, InputLabel,Select , MenuItem , TextField , Box} from '@mui/material/'


const FormPedidoAlta = () => {
  return (
    <>
    <Container 
    maxWidth="lg" 
    sx={{padding:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}
    >
        <Paper 
        elevation={3}
        sx={{width:"70%", padding:"25px" }}
        >
            <Grid
            container
            spacing={3}
            >
                <Grid
                item
                xs={12}
                >
                    <h1>Pedido de Alta</h1>
                    <Divider></Divider>
                </Grid>
                <Grid 
                item
                xs={6}
                >
                    <TextField
                    variant="outlined"
                    label="Direccion"
                    name="direction"
                    />
                </Grid>
                <Grid 
                item
                xs={6}
                >
                    <TextField
                    label="Telefono"
                    name="phone"
                    />
                </Grid>
            </Grid>
        </Paper>
    </Container>
    </>
  )
}

export default FormPedidoAlta