import { UserDataSource } from '../../domain/dataSource/user.datasource'
import { CreateUserDTO } from '../../domain/DTOs/users/createUser.dto'
import { UpdateUserDTO } from '../../domain/DTOs/users/updateUser.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { UserRepository } from '../../domain/repository/user.repository'

export class UserRepositoryImp implements UserRepository {
  constructor (private readonly datasource: UserDataSource) {}
  async getAll (): Promise<UserEntity[]> {
    return await this.datasource.getAll()
  }

  async create (dtoCreateUser: CreateUserDTO): Promise<UserEntity> {
    return await this.datasource.create(dtoCreateUser)
  }

  async findById (id: number): Promise<UserEntity> {
    return await this.datasource.findById(id)
  }

  async update (dtoUpdateUser: UpdateUserDTO): Promise<UserEntity> {
    return await this.datasource.update(dtoUpdateUser)
  }

  async delete (id: number): Promise<UserEntity> {
    return await this.datasource.delete(id)
  }
}
