import express from 'express';
import bodyParser from 'body-parser'
import {usersRouter} from './routes/users.route.js'
import {connectDB} from './db.js'
import { port } from './config.js';


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connectDB()

app.listen( port || 5000 , ()=> console.log("Servidor Funcionando")) 


app.use(usersRouter) 