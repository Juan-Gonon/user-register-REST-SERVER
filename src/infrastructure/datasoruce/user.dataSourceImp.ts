import { prisma } from '../../data/postgres'
import { UserDataSource } from '../../domain/dataSource/user.datasource'
import { CreateUserDTO } from '../../domain/DTOs/users/createUser.dto'
import { UpdateUserDTO } from '../../domain/DTOs/users/updateUser.dto'
import { UserEntity } from '../../domain/entities/user.entity'

export class UserDataSourceImp implements UserDataSource {
  async getAll (): Promise<UserEntity[]> {
    try {
      const users = await prisma.users.findMany()

      return users.map((user) => UserEntity.fromObject(user))
    } catch (error) {
      throw new Error('Error gets user not found')
    }
  }

  async create (dtoCreateUser: CreateUserDTO): Promise<UserEntity> {
    try {
      const user = await prisma.users.create({
        data: dtoCreateUser
      })

      return UserEntity.fromObject(user)
    } catch (error) {
      throw new Error('Error created user')
    }
  }

  async findById (id: number): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }

  async update (dtoUpdateUser: UpdateUserDTO): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }

  async delete (id: number): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
}
