import bcrypt from 'bcrypt'
import { User } from '../../models/user'
import { generateToken } from '../middleware/auth'

export const createUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res
            .status(400)
            .json({ message: 'Both email and password are required.' })

    try {
        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) {
            return res
                .status(400)
                .json({ message: 'this email already exists.' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email,
            password: hashedPassword,
        })

        res.status(201).json({ message: 'User has been created successfully' })
    } catch (error) {
        console.error('Error create user:', error)
        return res
            .status(500)
            .json({ message: 'An error occurred while creating the user.' })
    }
}

export const logIn = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res
            .status(400)
            .json({ message: 'Both email and password are required.' })

    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res
                .status(409)
                .json({ message: 'Incorrect email or password.' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res
                .status(409)
                .json({ message: 'Incorrect email or password.' })
        }
        const token = generateToken(user)

        res.status(200).json({ message: 'Logged in successfully.', token })
    } catch (error) {
        console.error('Error logging in:', error)
        return res
            .status(500)
            .json({ message: 'An error occurred while trying to log in.' })
    }
}
