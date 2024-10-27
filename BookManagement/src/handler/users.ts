import bcrypt from 'bcrypt'
import { User } from '../../models/user'
import { generateToken } from '../middleware/auth'

export const createUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.status(400).json({ message: 'All fields are required' })

    try {
        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ message: 'Email is there ' })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email,
            password: hashPassword,
        })

        res.status(201).json({ message: 'User had been created successfully' })
    } catch (error) {
        console.error('Error create user:', error)
        return res.status(500).json({ message: 'Error create user' })
    }
}

export const logIn = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.status(400).json({ message: 'All fields are required' })

    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res
                .status(409)
                .json({ message: 'password or email are wrong ' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res
                .status(409)
                .json({ message: 'password or email are wrong ' })
        }
        const token = generateToken(user)

        res.status(200).json({ message: 'log in successfully', token })
    } catch (error) {
        console.error('Error to login :', error)
        return res.status(500).json({ message: 'Error to login' })
    }
}
