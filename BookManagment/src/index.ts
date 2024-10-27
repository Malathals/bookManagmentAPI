import express from 'express'
import dotenv from 'dotenv'
import { testConnection } from '../config/db'
import router from './router/router'


dotenv.config()

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

testConnection()
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(
                `the server is running on this http://localhost:${process.env.SERVER_PORT}`
            )
        })
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })
