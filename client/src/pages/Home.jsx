import React, {useEffect, useContext} from 'react'
import {anonymous} from '../context/Anonymous'
import {useNavigate} from 'react-router-dom'

export const Home = () => {

    const {user} = useContext(anonymous)

    const navigate = useNavigate()
    


    useEffect(()=> {

        if( !user ){
            navigate("/login")
        } 

        else if(user.role === "call"){
            navigate("/call")
        }

        else if(user.role === "inst"){
            navigate("/instalador")
        }

        else if (user.role === "admin"){

            navigate("/dashboard")
        }

        


    })

  return (
    <>
    Espera a Ser redireccionado
    </>
  )
}

