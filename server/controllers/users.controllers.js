import Users from '../models/users.model.js'
import Altas from '../models/alta.model.js'
import {uploadImage} from '../libs/cloudinary.js'

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

     
     console.log(req.files)
     const upImg1 = await uploadImage(req.files.img1.tempFilePath)
     const upImg2 = await uploadImage(req.files.img2.tempFilePath)
     const upImg3 = await uploadImage(req.files.img3.tempFilePath)

     let newAlta =  { 
          client : {
               name: req.body.name,
               dni: req.body.dni,
               phone: req.body.phone,
               direction: req.body.direction,
          }, 
          service: {
               type: req.body.service_type,
               ip: req.body.service_ip,
               cardNum: req.body.service_cardNum,
               plan: req.body.service_plan
          },
          installer:{
               name: req.body.inst_name,
               lasName: req.body.inst_lastName,
               dni: req.body.inst_dni,  
               phone: req.body.inst_phone
          },
          img1 : upImg1.secure_url , 
          img2 : upImg2.secure_url,
          img3: upImg3.secure_url
     }

     const sendNewAlta = await Altas(newAlta).save()

     console.log(sendNewAlta)
      
     res.send(sendNewAlta) 
}


export const getAllAltas = async (req, res) => {

     const query = await Altas.find()

     res.send(query)
}

export const getFilterDNI = async (req, res) => {

     const {dni} = req.body

     const result = await Altas.find({dni : dni})

     res.send(res)
}