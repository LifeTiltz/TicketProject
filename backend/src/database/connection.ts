import mysql, { RowDataPacket, QueryError, OkPacket } from 'mysql2'
import config from '../config'
import HttpException from '../exceptions/http-exception'

export type SelectResponse = RowDataPacket[]

export type InsertResponse = {
  insertId: number
}

const pool = mysql.createPool({
  connectionLimit: 2,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  insecureAuth: true,
})

export const query = (queryString: string, values?: any[]): Promise<unknown> =>
  new Promise((resolve, reject) => {
    pool.query(queryString, values, (err, results) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        resolve(results)
      }
    })
  })

export const db = {
  insert: (queryString: string, values: any[]): Promise<InsertResponse> => {
    try {
      return query(queryString, values) as Promise<InsertResponse>
    } catch (err) {
      throw new HttpException(500, 'DB error')
    }
  },
  select: (queryString: string, values?: any[]): Promise<SelectResponse> => {
    try {
      return query(queryString, values) as Promise<SelectResponse>
    } catch (err) {
      throw new HttpException(500, 'DB error')
    }
  },
  modify: (queryString: string, values?: any[]): Promise<OkPacket> => {
    try {
      return query(queryString, values) as Promise<OkPacket>
    } catch (err) {
      throw new HttpException(500, 'DB error')
    }
  },
}
