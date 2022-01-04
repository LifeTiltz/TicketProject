import { Request, Response, NextFunction } from 'express';
import { IRegistrationReq } from '../models/Registration';
import { registerService } from '../services/register-service';

export const registerController = {
  register: async (
    req: Request<unknown, unknown, IRegistrationReq>,
    res: Response,
    _next: NextFunction
  ) => {
    const { email, username, password } = req.body;
    const savedUser = await registerService
      .register(password, username, email)
      .catch(err => _next(err));
    if (savedUser) {
      res.status(201).json(savedUser);
    }
  },
};
