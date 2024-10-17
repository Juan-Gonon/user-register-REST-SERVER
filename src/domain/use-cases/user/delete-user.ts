import { RespUserDTO } from '../../DTOs/users/respUser.dto'
import { UserRepository } from '../../repository/user.repository'

interface DeleteUserUseCase {
  execute: (id: number) => Promise<RespUserDTO>
}

export class DeleteUser implements DeleteUserUseCase {
  constructor (private readonly repository: UserRepository) {}

  async execute (id: number): Promise<RespUserDTO> {
    const user = await this.repository.delete(id)

    return RespUserDTO.response(user)
  }
}
