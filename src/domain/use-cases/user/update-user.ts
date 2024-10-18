import { RespUserBody } from '../../../types/type'
import { RespUserDTO } from '../../DTOs/users/respUser.dto'
import { UpdateUserDTO } from '../../DTOs/users/updateUser.dto'
import { UserRepository } from '../../repository/user.repository'

interface UpdateUserUseCase {
  execute: (body: RespUserBody) => Promise<RespUserDTO>
}

export class UpdateUser implements UpdateUserUseCase {
  constructor (private readonly repository: UserRepository) {}
  async execute (body: RespUserBody): Promise<RespUserDTO> {
    const updateUser = UpdateUserDTO.update(body)
    const user = await this.repository.update(updateUser)

    return RespUserDTO.response(user)
  }
}
