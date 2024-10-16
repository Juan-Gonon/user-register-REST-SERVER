/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { prisma } from '../../data/postgres'
import { CreateUserDTO } from '../../domain/DTOs/users/createUser.dto'
import { RespUserDTO } from '../../domain/DTOs/users/respUser.dto'
import { UpdateUserDTO } from '../../domain/DTOs/users/updateUser.dto'

export class UsersController {
  getUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await prisma.users.findMany()
    const usersResp = users.map((user) => RespUserDTO.response(user))

    res.json(usersResp)
  }

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const user = await prisma.users.findFirst({
      where: {
        id: userId
      }
    })

    if (!user) {
      res.status(404).json({ error: `Todo with id ${userId} not found` })
      return
    }
    const userResp = RespUserDTO.response(user)

    res.json(userResp)
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    const createUser = CreateUserDTO.create(req.body)

    const user = await prisma.users.create({
      data: createUser
    })

    const respUser = RespUserDTO.response(user)
    res.json(respUser)
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id
    const updateUser = UpdateUserDTO.update(req.body)

    const user = await prisma.users.findFirst({
      where: {
        id: userId
      }
    })

    if (!user) {
      res.status(404).json({ error: `Todo with id ${userId} not found` })
      return
    }

    const resUpdate = await prisma.users.update({
      where: {
        id: user.id
      },
      data: updateUser.values
    })

    const resUserUpdated = RespUserDTO.response(resUpdate)
    res.json(resUserUpdated)
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = +req.params.id

    const user = await prisma.users.findFirst({ where: { id: userId } })

    if (!user) {
      res.status(404).json(
        { error: `Todo with id ${userId} not found` }
      )
      return
    }

    const deletedUser = await prisma.users.delete({ where: { id: userId } })
    const userDeleteResp = RespUserDTO.response(deletedUser)
    res.json(userDeleteResp)
  }
}
