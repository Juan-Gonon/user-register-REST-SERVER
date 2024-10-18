import { CreateUserDTO } from '../DTOs/users/createUser.dto'
import { UpdateUserDTO } from '../DTOs/users/updateUser.dto'
import { UserEntity } from '../entities/user.entity'

export abstract class UserDataSource {
  abstract getAll (): Promise<UserEntity[]>
  abstract create (dtoCreateUser: CreateUserDTO): Promise<UserEntity>
  abstract findById (id: number): Promise<UserEntity>
  abstract update (dtoUpdateUser: UpdateUserDTO): Promise<UserEntity>
  abstract delete (id: number): Promise<UserEntity>
}
