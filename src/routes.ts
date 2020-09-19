import express, { Request, Response } from 'express'
import PetsController from './controllers/PetsController'
import AuthController from './controllers/AuthController'

const routes = express.Router()

const petsController = new PetsController()
const authController = new AuthController()

routes.get('/', (request: Request, response: Response) => response.sendStatus(200))
routes.post('/pet/register', petsController.register)
routes.get('/pet/list', petsController.list)
routes.delete('/pet/delete/:id', petsController.delete)

routes.post('/user/register', authController.register)
routes.delete('/user/delete/:id', authController.delete)

export default routes