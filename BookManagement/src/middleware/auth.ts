import JWT from 'jsonwebtoken'

export const generateToken = (user) => {
    return JWT.sign(
        {
            email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '2d' }
    )
}

export const verifyToken = (req, res, next) => {
    const userHeader = req.headers['authorization']

    if (!userHeader)
        return res.status(400).json({ message: 'Token is required' })

    const token = userHeader.split(' ')[1]

    if (!token) return res.status(400).json({ message: 'Token is required' })

    try {
        const user = JWT.verify(token, process.env.JWT_SECRET)
        req.user = req
        next()
    } catch (error) {
        console.error('Token verification failed:', error)
        return res.status(403).send('Invalid token')
    }
}
