import {Router} from 'express'
import { createUser , getUsers , getAllUsers , createAlta, getAllAltas , getFilterDNI, createReclamo , getReclamos,  newGasto} from '../controllers/users.controllers.js'

export const usersRouter = Router()

usersRouter.post('/newuser', createUser)


usersRouter.post('/login', getUsers)

usersRouter.get('/allusers', getAllUsers)

usersRouter.post('/newalta' , createAlta )

usersRouter.get('/altas' , getAllAltas)

usersRouter.post('/filterdni' , getFilterDNI)

usersRouter.post('/newbaja' , createReclamo)

usersRouter.get('/getreclamos' , getReclamos)

usersRouter.post('/newgasto' , newGasto)
