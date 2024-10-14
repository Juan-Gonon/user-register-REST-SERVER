
export interface ParamsBody {
  name: 'name'
  lastname: 'lastname'
  password: 'password'
  email: 'email'
}

export type UserName = Pick<ParamsBody, 'name'>
export type UserLastname = Pick<ParamsBody, 'lastname'>
export type UserEmail = Pick<ParamsBody, 'password'>
export type UserPassword = Pick<ParamsBody, 'password'>
