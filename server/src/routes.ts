import { Router } from 'express'
import PersonController from './controllers/PersonController'

import multer from 'multer'
import multerConfig from './config/multer'

const routes = Router()

const upload = multer(multerConfig)

routes.get('/persons', PersonController.index)
routes.post('/persons', upload.single('file'), PersonController.store)
routes.patch('/persons/:id', upload.single('file'), PersonController.update)
routes.delete('/persons/:id', PersonController.delete)

export default routes