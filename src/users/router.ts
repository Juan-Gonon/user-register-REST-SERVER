/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Router } from 'express'
import { UsersController } from './controllers/controllers'
import { body, param } from 'express-validator'
import { UsersMiddleware } from '../middleware/users.middleware'
import { PARAMS_BODY } from '../constants'
import { UserRepositoryImp } from '../infrastructure/repository/user.repositoryImp'
import { UserDataSourceImp } from '../infrastructure/datasoruce/user.dataSourceImp'

export class UsersRoutes {
  static get routes (): Router {
    const router = Router()
    const datasource = new UserDataSourceImp()
    const repository = new UserRepositoryImp(datasource)
    const todoControllers = new UsersController(repository)

    router.get('/', todoControllers.getUsers)
    router.get('/:id', [param(PARAMS_BODY.id, 'ID must be a number').isInt(), UsersMiddleware.validation], todoControllers.getUserById)
    router.post('/', [
      body(PARAMS_BODY.name, `${PARAMS_BODY.name} is required`).notEmpty(),
      body(PARAMS_BODY.lastname, `${PARAMS_BODY.lastname} is required`).notEmpty(),
      body(PARAMS_BODY.email, `${PARAMS_BODY.email} is required`).notEmpty().isEmail(),
      body(PARAMS_BODY.password, `${PARAMS_BODY.password} is required`).notEmpty().isLength({ min: 8 }),
      body(PARAMS_BODY.createdAt, `${PARAMS_BODY.createdAt} is required`).optional().isDate(),
      UsersMiddleware.validation
    ], todoControllers.createUser)
    router.put('/:id', [
      param(PARAMS_BODY.id, 'ID must be provided and must be a number').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be a valid integer'),
      body(PARAMS_BODY.name, 'Name cannot be empty').optional().notEmpty(),
      body(PARAMS_BODY.lastname, 'Lastname cannot be empty').optional().notEmpty(),
      body(PARAMS_BODY.createdAt, `${PARAMS_BODY.createdAt} cannot be empty`).optional().isDate().notEmpty(),
      UsersMiddleware.validation],
    todoControllers.updateUser
    )
    router.delete('/:id', [param(PARAMS_BODY.id, 'ID must be a number').isInt(), UsersMiddleware.validation], todoControllers.deleteUser)

    return router
  }
}
