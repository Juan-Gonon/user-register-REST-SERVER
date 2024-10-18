
export interface CreateUserBody {
  name: string
  lastname: string
  password: string
  email: string
  createdAt?: Date | null
}

export interface RespUserBody {
  id: number
  name: string
  lastname: string
  email: string
  createdAt?: Date | null
}
