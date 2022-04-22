import Users from '../models/users.model.js'
import Altas from '../models/alta.model.js'

export const createUser = async  (req, res) => { 
     const user = req.body

     try {
          const res = await Users(user).save()

          console.log(res)
     } catch (error) {
          console.log(error)
     }

     res.send('Recived')
}


export const getUsers = async (req, res) => {

     const {email , password} = req.body

    const result = await Users.find({email : email})

    if (result[0]){ 

            if(result[0].password === password){
                res.send(result[0])
            }
            else {
                res.send('Contraseña Incorrecta')
            }

    }

    else {res.send('No exite un Usuario con ese Email')}

}


export const getAllUsers = async (re, res) => {

     const query = await Users.find().sort({_id: 1})

     res.send(query)
}


export const createAlta = async (req, res) => {

     const result = await Altas(req.body).save()


     res.send(result)
}


export const getAllAltas = async (req, res) => {

     const query = await Altas.find()

     res.send(query)
}