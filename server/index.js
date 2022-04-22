import express from 'express';
import bodyParser from 'body-parser'
import {usersRouter} from './routes/users.route.js'
import {connectDB} from './db.js'
import { port } from './config.js';
import {dirname , join} from 'path'
import {fileURLToPath } from 'url'


const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connectDB()

app.use(usersRouter) 

app.use(express.static(join(__dirname, '../client/build')))


app.listen( port || 5000 , ()=> console.log("Servidor Funcionando")) 