import { RespUserDTO } from '../../DTOs/users/respUser.dto'
import { UserRepository } from '../../repository/user.repository'

interface GetsUserUseCase {
  execute: () => Promise<RespUserDTO[]>
}

export class GetsUsers implements GetsUserUseCase {
  constructor (private readonly repository: UserRepository) {}

  async execute (): Promise<RespUserDTO[]> {
    const users = await this.repository.getAll()
    return users.map((user) => RespUserDTO.response(user))
  }
}
