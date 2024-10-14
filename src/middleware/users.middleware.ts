/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Response, Request, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export class UsersMiddleware {
  static validation (req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(400).json({
        ok: false,
        error: errors.mapped()
      })
      return
    }

    next()
  }
}
