import axios from 'axios'

export const loginRequest = async (user) => {


    const res = await axios.post('/login', user )

    return res

}


export const allUsersRequest = async () =>  {

    const res = await axios.get('/allusers')

    return res

}


export const newAltaRequest = async (alta) => {

    const sendAlta = await axios.post('/newAlta' , alta)

    console.log(sendAlta)
}