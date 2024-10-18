/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { UserRepository } from '../../domain/repository/user.repository'
import { GetsUsers, GetByIdUser, CreateUser, UpdateUser, DeleteUser } from '../../domain/use-cases'

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

    const updateUser = new UpdateUser(this.repository)

    updateUser.execute({ ...req.body, id: userId })
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ ok: false, error: (error as Error).message }))
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const deleteUser = new DeleteUser(this.repository)

    deleteUser.execute(userId)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ ok: false, error: (error as Error).message }))
  }
}
