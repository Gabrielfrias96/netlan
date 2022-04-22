import {Router} from 'express'
import { createUser , getUsers , getAllUsers , createAlta} from '../controllers/users.controllers.js'

export const usersRouter = Router()

usersRouter.post('/newuser', createUser)


usersRouter.post('/login', getUsers)

usersRouter.get('/allusers', getAllUsers)

usersRouter.post('/newAlta' , createAlta )
