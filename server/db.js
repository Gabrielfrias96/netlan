import mongoose from 'mongoose';

export async function connectDB (){

   try {

    const db = await mongoose.connect('mongodb+srv://pick:Gabiywendy29@pick.xn7zc.mongodb.net/Netlan?retryWrites=true&w=majority')
    
    console.log('Base de Datos Conectada', db.connection.name)

   } catch (error) {
       console.log(error)
   } 
}