/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'

const users = [
  {
    id: 1,
    name: 'Kamila',
    lastname: 'Valieva',
    createdAt: new Date('2024-10-13')
  },
  {
    id: 2,
    name: 'Anna Shcherbakova',
    lastname: 'Sch',
    createdAt: new Date('2024-10-13')
  },
  {
    id: 3,
    name: 'Kamila',
    lastname: 'Valieva',
    createdAt: null
  }
]

export class UsersController {
  getUsers = async (req: Request, res: Response): Promise<void> => {
    res.json(users)
  }

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const userById = users.find((user) => user.id === userId)

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!userById) {
      res.status(404).json({
        error: 'Usuario no encontrado'
      })
      return
    }

    res.json(userById)
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, lastname, email, password, createdAt = null } = req.body
    let date = createdAt

    if (createdAt) {
      date = new Date(createdAt)
    }

    const newUser = {
      id: users.length + 1,
      name,
      lastname,
      email,
      password,
      createdAt: date
    }
    users.push(newUser)

    res.json(newUser)
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const user = users.find((user) => user.id === userId)
    if (!(user !== undefined)) {
      res.status(404).json({ error: `Todo with id ${userId} not found` })
      return
    }

    const { name, lastname, createdAt } = req.body

    user.name = name ?? user.name
    user.lastname = lastname ?? user.lastname
    user.createdAt = createdAt ?? user.createdAt

    res.json(user)
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const todoIndex = users.findIndex((user) => user.id === userId)
    const todo = users[todoIndex]
    if (todoIndex < 0) {
      res.status(404).json({ error: `Todo with id ${userId} not found` })
      return
    }
    users.splice(todoIndex, 1)
    res.json(todo)
  }
}
