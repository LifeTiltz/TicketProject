import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config'
import HttpException from '../../exceptions/http-exception'
import { IProfile, User } from '../../users/models/User'
import { LoginReq } from '../controllers/login-controller'

export type TokenPayload = {
  userId: number
  username: string
  isAdmin: boolean
}

export const loginService = {
  login: async (loginData: LoginReq): Promise<string> => {
    if (!loginData.email) throw new HttpException(406, 'email is required')
    if (!loginData.password)
      throw new HttpException(406, 'password is required')

    const user = await User.getByEmail(loginData.email)

    if (!user || !bcrypt.compareSync(loginData.password, user.password)) {
      throw new HttpException(404, 'email address or password is incorrect')
    }

    const tokenPayload = {
      userId: user.user_id,
      username: user.username,
      isAdmin: !!user.is_admin,
    }
    const token = jwt.sign(tokenPayload, String(config.token.secret))
    return token
  },
}
