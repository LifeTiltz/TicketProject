import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import { TokenPayload } from '../login/services/login-service'

const accessTokenSecret = config.token.secret || ''

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  console.log('headers:', req.headers)

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user as TokenPayload
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
