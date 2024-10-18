/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { RespUserBody } from '../../types/type'

interface PropsFromObject extends RespUserBody {
  password?: string
}

export class UserEntity implements PropsFromObject {
  id: number
  name: string
  lastname: string
  email: string
  createdAt?: Date | null | undefined
  password?: string

  private constructor ({ id, name, lastname, email, createdAt, password }: PropsFromObject) {
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.createdAt = createdAt
    this.password = password
  }

  get isCreatedAt (): boolean {
    return !(this.createdAt === null)
  }

  static fromObject (props: PropsFromObject): UserEntity {
    const { id, name, lastname, email, password } = props

    if (!id) throw new Error('id is required')
    if (!name) throw new Error('name is required')
    if (!lastname) throw new Error('lastname is required')
    if (!email) throw new Error('email is required')
    if (!password) throw new Error('password is required')

    return new UserEntity(props)
  }
}
