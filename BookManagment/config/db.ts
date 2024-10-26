import { Sequelize } from 'sequelize'
import connection from './db_config'

const { database, user, password, dialect, dbLogging, port } = connection

const sequelize = new Sequelize(database, user, password, {
    dialect: dialect,
    port: port,
    logging: dbLogging,
})

async function testConnection() {
    try {
        sequelize.authenticate()
        console.log('Connection has been established successfully')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export { sequelize, testConnection }
