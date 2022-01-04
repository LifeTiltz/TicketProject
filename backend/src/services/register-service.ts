import HttpException from '../exceptions/http-exception';
import bcrypt from 'bcrypt';
import { User } from '../models/Registration';

export const registerService = {
  register: async (password: string, username: string, email: string) => {
    if (!password) {
      throw new HttpException(400, 'password is required');
    }
    if (!username) {
      throw new HttpException(400, 'username is required');
    }
    if (!email) {
      throw new HttpException(400, 'email is required');
    }
    if (!password && !username && !email) {
      throw new HttpException(400, 'username, email and password are required');
    }
    if (password.length < 8) {
      throw new HttpException(400, 'password must be at least 8 characters');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const userToSave = {
      username,
      email,
      password: hash,
      isAdmin: false,
    };
    const id = await User.create(userToSave);
    const savedUser = {
      id,
      username,
      isAdmin: false,
    };
    return savedUser;
  },
};
