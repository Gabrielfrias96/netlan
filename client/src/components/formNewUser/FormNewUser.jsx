import React , {useState} from 'react'
import ContainerSideBar from '../ContainerSideBar/ContainerSideBar'
import {Paper , TextField, Box, InputLabel , MenuItem, Select, Button} from '@mui/material'

const FormNewUser = () => {

    const [values,setValues] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        dni:"",
        phone:"",
        role:""
    })

    const handleChange = (e) => {
            setValues({...values, [e.target.name]: e.target.value})
    }


  return (
    <ContainerSideBar>
        <Paper elevation={3}
        sx={{maxWidth:"80%", padding:"25px", marginTop:"25px"}}
        >
            <Box sx={{margin:"10px 0px"}}>
                <TextField label="Nombre" name="name" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <TextField label="Apellido" name="lastName" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <TextField type="email" label="Email" name="email" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <TextField type="password" label="Contraseña" name="password" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <TextField label="DNI" name="dni" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <TextField label="Celular" name="phone" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{margin:"10px 0px"}}>
                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.role}
                    label="Rol"
                    name="role"
                    fullWidth
                    onChange={handleChange}
                >
                    <MenuItem value="instalador">Instalador</MenuItem>
                    <MenuItem value="call">Call Center</MenuItem>
                    <MenuItem value="admin">Encargado</MenuItem>
                </Select>
            </Box>
            <Box>
                <Button variant="contained" color="success" fullWidth onClick={() => console.log(values)} >Crear</Button>
            </Box>
            

        </Paper>
    </ContainerSideBar>
  )
}

export default FormNewUser