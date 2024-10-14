/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Router } from 'express'
import { UsersRoutes } from '../users/router'

export class AppRouter {
  static get router (): Router {
    const router = Router()

    router.use('/api/users', UsersRoutes.routes)

    return router
  }
}
