import { Request, Response, NextFunction } from 'express';
import { IProfile, IRegistrationReq } from '../models/User';
import { userService } from '../services/user-service';

export const userController = {
  register: async (
    req: Request<unknown, unknown, IRegistrationReq>,
    res: Response,
    _next: NextFunction
  ) => {
    const { email, username, password } = req.body;
    const savedUser = await userService
      .register(password, username, email)
      .catch(err => _next(err));
    if (savedUser) {
      res.status(201).json(savedUser);
    }
  },
  put: async (
    req: Request<{ userId: number }, unknown, { name: string; email: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const modifiedProfile: IProfile | void = await userService
      .update({ id: req.params.userId, ...req.body })
      .catch(err => next(err));
    if (modifiedProfile) res.status(200).json(modifiedProfile);
  },
};
