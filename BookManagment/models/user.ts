import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/db'

interface UserAttributes {
    id?: number
    email: string
    password: string
}

class User extends Model<UserAttributes> implements UserAttributes {
    user_ID?: number
    email!: string
    password!: string
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: false,
    }
)
export { User, UserAttributes }
