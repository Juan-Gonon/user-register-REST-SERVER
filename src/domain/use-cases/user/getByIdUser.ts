import { RespUserDTO } from '../../DTOs/users/respUser.dto'
import { UserRepository } from '../../repository/user.repository'

interface GetByIdUserUseCase {
  execute: (id: number) => Promise<RespUserDTO>
}
export class GetByIdUser implements GetByIdUserUseCase {
  constructor (readonly repository: UserRepository) {}
  async execute (id: number): Promise<RespUserDTO> {
    const user = await this.repository.findById(id)
    return RespUserDTO.response(user)
  }
}
