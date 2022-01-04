import { ResultSetHeader } from 'mysql2'
import { db } from '../../database/connection'

export type IProfile = {
  id: number
  name: string
  email: string
}

export type IDBUser = {
  user_id: number
  username: string
  email: string
  password: string
  is_admin: boolean
  is_verified: boolean
}

export interface IRegistrationReq {
  email: string
  username: string
  password: string
  isAdmin?: boolean
  isVerified?: boolean
}

export const User = {
  getByEmail: async (email: string): Promise<IDBUser> => {
    const query = 'SELECT * FROM users WHERE email = ?'
    const dbResult = await db.select(query, [email])
    return dbResult[0] as IDBUser
  },
  create: async (userToSave: IRegistrationReq): Promise<unknown> => {
    const query =
      'INSERT INTO users (username, email, password, is_admin, is_verified) VALUES (?, ?, ?, ?, ?);'
    const dbResult = await db.insert(query, [
      userToSave.username,
      userToSave.email,
      userToSave.password,
      userToSave.isAdmin,
      userToSave.isVerified,
    ])
    const id = (dbResult as ResultSetHeader).insertId
    return id
  },
  modify: async ({ id, name, email }: IProfile): Promise<boolean> => {
    const updateQuery = 'UPDATE users SET username=?, email=? WHERE user_id=?;'
    await db.modify(updateQuery, [name, email, id])
    return true
  },
}
