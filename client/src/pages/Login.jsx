import React, { useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {anonymous} from '../context/Anonymous'
import {loginRequest} from '../api/user.js'
import {Container, Paper, Divider, TextField , Grid , Button, Fade} from '@mui/material'

export const Login = () => {

    const {setUser} = useContext(anonymous)
    
    const [errorValue,setErrorValue] = useState("")

    const [openError, setOpenError]= useState(false)

    const navigate = useNavigate()

    const [values , setValues] = useState({
        email:"",
        password:""
    })

    const handleLogin = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const getLogin = async (user) => {

        try {

            const usuario = await loginRequest(user)
            if(typeof usuario.data == 'string'){
                setErrorValue(usuario.data)
                setOpenError(true)
                setTimeout(() => {
                    setOpenError(false)
                }, 3000);
            }
            else{
                setUser(usuario.data)
                navigate("/")
                console.log(usuario.data)
            }
        } catch (error) {

            console.log(error)
        }

    }



  return (
    <Container
    sx={{height:"100vh",display:"flex",justifyContent:"center", alignItems:"center"}}
    >
        {values && 
        
            <Paper 
            elevation={3}
            sx={{width:"300px",height:"350px", textAlign:"center", padding:"20px"}} 
            >
                <h2>NetLan</h2>
                <Divider>Ingresá</Divider>
                <Grid container spacing={3}
                sx={{marginTop:"25px"}}>
                    <Grid item xs={12}>
                        <TextField label="Email" name="email" variant="outlined" fullWidth onChange={handleLogin}/>
                    </Grid>
                    <Grid item xs={12}>                  
                        <TextField mt="2" type="password" label="Contraseña" name="password" variant="outlined" fullWidth onChange={handleLogin} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={()=> getLogin(values)} variant="contained" fullWidth>Ingresar</Button>
                    </Grid>
                    {errorValue !== "" && 
                    <Fade in={openError}>
                            <Grid item xs={12} sx={{color:"red", fontWeight:"500" }}>
                                <p>{errorValue}</p>
                            </Grid>
                        </Fade>
                    }
                </Grid>

            </Paper> }
    </Container>
  )
}
