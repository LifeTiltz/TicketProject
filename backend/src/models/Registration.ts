import { OkPacket } from 'mysql2';
import { db } from '../data/connection';

export interface IRegistrationReq {
  email: string;
  username: string;
  password: string;
  isAdmin?: boolean;
}

export const User = {
  create: async (userToSave: IRegistrationReq): Promise<unknown> => {
    const query =
      'INSERT INTO users (username, email, hash, isAdmin) VALUES (?, ?, ?, ?);';
    const dbResult = await db.query(query, [
      userToSave.username,
      userToSave.email,
      userToSave.password,
      userToSave.isAdmin,
    ]);
    const id = (dbResult as OkPacket).insertId;
    return id;
  },
};
