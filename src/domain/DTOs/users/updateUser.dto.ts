/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RespUserBody } from '../../../types/type'

export class UpdateUserDTO {
  public readonly id: number
  public readonly name: string
  public readonly lastname: string
  public readonly createdAt?: Date | null | undefined

  private constructor (id: number, name: string, lastname: string, createdAt: Date | null) {
    this.name = name
    this.lastname = lastname
    this.createdAt = createdAt
    this.id = id
  }

  get values (): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {}

    if (this.createdAt) returnObj.createdAt = this.createdAt
    if (this.name) returnObj.name = this.name
    if (this.lastname) returnObj.lastname = this.lastname

    return returnObj
  }

  static update (body: RespUserBody): UpdateUserDTO {
    const { id, name, lastname, createdAt = null } = body
    let newCreatedAt: Date | null = createdAt

    if (createdAt !== null) {
      newCreatedAt = new Date(createdAt)
    }

    return new UpdateUserDTO(id, name, lastname, newCreatedAt)
  }
}
