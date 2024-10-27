import { Dialect } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

type DbConnection = {
    port: number
    user: string
    password: string
    database: string
    dbLogging: boolean
    dialect: Dialect
}

const connection: DbConnection = {
    database: process.env.DATABASE as string,
    port: Number(process.env.DB_PORT),
    user: process.env.USERNAME as string,
    password: process.env.PASSWORD as string,
    dialect: process.env.DB_DIALECT as Dialect,
    dbLogging: false,
}

export default connection
