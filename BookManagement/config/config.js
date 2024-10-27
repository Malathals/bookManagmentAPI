require('dotenv').config()

module.exports = {
    development: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: '127.0.0.1',
        port: parseInt(process.env.DB_PORT, 10),
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: false,
    },
}

//this file only use for db Migrations.
