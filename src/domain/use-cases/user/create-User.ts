import { CreateUserBody } from '../../../types/type'
import { CreateUserDTO } from '../../DTOs/users/createUser.dto'
import { RespUserDTO } from '../../DTOs/users/respUser.dto'
import { UserRepository } from '../../repository/user.repository'

interface CreateUserUseCase {
  execute: (body: CreateUserBody) => Promise<RespUserDTO>
}

export class CreateUser implements CreateUserUseCase {
  constructor (private readonly repository: UserRepository) {}
  async execute (body: CreateUserBody): Promise<RespUserDTO> {
    const createUser = CreateUserDTO.create(body)
    const user = await this.repository.create(createUser)
    return RespUserDTO.response(user)
  }
}
