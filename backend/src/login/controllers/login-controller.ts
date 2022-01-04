import { NextFunction, Request, Response } from 'express'
import { loginService } from '../services/login-service'

export type LoginReq = {
  email: string
  password: string
}

export const loginController = {
  login: async (
    req: Request<unknown, unknown, LoginReq>,
    res: Response,
    next: NextFunction
  ) => {
    const loginData = req.body
    const token = await loginService.login(loginData).catch(e => next(e))
    if (token) {
      res.status(200).json({ token })
    }
  },
}
