import { CreateUserBody } from '../../../types/type'

export class CreateUserDTO implements CreateUserBody {
  public readonly name
  public readonly lastname
  public readonly email
  public readonly password
  public readonly createdAt
  private constructor ({ name, lastname, email, password, createdAt }: CreateUserBody) {
    this.name = name
    this.lastname = lastname
    this.email = email
    this.password = password
    this.createdAt = createdAt
  }

  static create (body: CreateUserBody): CreateUserDTO {
    const { name, lastname, email, password, createdAt = null } = body
    let date = createdAt

    if (createdAt !== null) {
      date = new Date(createdAt)
    }

    return new CreateUserDTO({ name, lastname, email, password, createdAt: date })
  }
}
