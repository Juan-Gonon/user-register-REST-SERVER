import { RespUserBody } from '../../../types/type'

export class RespUserDTO implements RespUserBody {
  public readonly id
  public readonly name
  public readonly lastname
  public readonly email
  public readonly createdAt

  private constructor ({ id, name, lastname, email, createdAt }: RespUserBody) {
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.createdAt = createdAt
  }

  static response (body: RespUserBody): RespUserDTO {
    const { id, name, lastname, email, createdAt } = body

    return new RespUserDTO({ id, name, lastname, email, createdAt })
  }
}
