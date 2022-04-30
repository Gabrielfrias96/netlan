import {Router} from 'express'
import { createUser , getUsers , getAllUsers , createAlta, getAllAltas , getFilterDNI} from '../controllers/users.controllers.js'

export const usersRouter = Router()

usersRouter.post('/newuser', createUser)


usersRouter.post('/login', getUsers)

usersRouter.get('/allusers', getAllUsers)

usersRouter.post('/newalta' , createAlta )

usersRouter.get('/altas' , getAllAltas)

usersRouter.post('/filterdni' , getFilterDNI)
