import { RespUserBody } from '../../types/type'

export class UserEntity implements RespUserBody {
  id: number
  name: string
  lastname: string
  email: string
  createdAt?: Date | null | undefined

  private constructor ({ id, name, lastname, email, createdAt }: RespUserBody) {
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.createdAt = createdAt
  }

  get isCreatedAt (): boolean {
    return !(this.createdAt === null)
  }
}
