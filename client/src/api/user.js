import axios from 'axios'

export const loginRequest = async (user) => {


    const res = await axios.post('/login', user )

    return res

}

export const createUserRequest = async (user) => {

    const result = await axios.post('/newuser', user)
    return result
}


export const allUsersRequest = async () =>  {

    const res = await axios.get('/allusers')

    return res

}


export const newAltaRequest = async (alta) => {

    console.log(alta)

   const form = new FormData()

   for( let key in alta ) {
       form.append(key,alta[key])
   }

   const result = await axios.post('/newalta', form , {
    headers: {
        "Content-type": "multipart/form-data"
        }
    })
    return result

}


export const allAltasRequest = async () => {

    const res = await axios.get('/altas')

    return res
}