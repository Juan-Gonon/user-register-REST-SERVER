import { UserDataSource } from '../../domain/dataSource/user.datasource'
import { CreateUserDTO } from '../../domain/DTOs/users/createUser.dto'
import { UpdateUserDTO } from '../../domain/DTOs/users/updateUser.dto'
import { UserEntity } from '../../domain/entities/user.entity'

export class UserDataSourceImp implements UserDataSource {
  async getAll (): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
  }

  async create (dtoCreateUser: CreateUserDTO): Promise<UserEntity> {
    throw new Error('Method not implemented.')
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
