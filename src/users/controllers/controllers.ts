/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { RespUserDTO } from '../../domain/DTOs/users/respUser.dto'
import { UpdateUserDTO } from '../../domain/DTOs/users/updateUser.dto'
import { UserRepository } from '../../domain/repository/user.repository'
import { GetsUsers, GetByIdUser, CreateUser } from '../../domain/use-cases'

export class UsersController {
  constructor (private readonly repository: UserRepository) {}
  getUsers = async (req: Request, res: Response): Promise<void> => {
    const getsUser = new GetsUsers(this.repository)
    getsUser.execute()
      .then((users) => res.json(users))
      .catch((error) => res.status(400).json({ ok: false, error: (error as Error).message }))
  }

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id
    const getByIdUser = new GetByIdUser(this.repository)
    getByIdUser.execute(userId)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ ok: false, error: (error as Error).message }))
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    const createUser = new CreateUser(this.repository)
    createUser.execute(req.body)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ ok: false, error: (error as Error).message }))
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id
    try {
      const updateUser = UpdateUserDTO.update({ ...req.body, id: userId })
      const user = await this.repository.update(updateUser)
      const resUserUpdated = RespUserDTO.response(user)

      res.json(resUserUpdated)
    } catch (error) {
      res.status(400).json({
        error: (error as Error).message
      })
    }
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id
    try {
      const deletedUser = await this.repository.delete(userId)
      const user = RespUserDTO.response(deletedUser)

      res.json(user)
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: (error as Error).message
      })
    }
  }
}
