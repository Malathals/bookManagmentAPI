// models/BookStore.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

interface BookStoreAttributes {
    book_ID?: number; 
    title: string;
    author: string;
    publishedDate: Date;
    numberOfPages: number;
}

class BookStore extends Model<BookStoreAttributes> implements BookStoreAttributes {
    public book_ID!: number; 
    public title!: string;
    public author!: string;
    public publishedDate!: Date;
    public numberOfPages!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

BookStore.init(
    {
        book_ID: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publishedDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        numberOfPages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'BookStores',
        timestamps: false,
    }
);

export { BookStore, BookStoreAttributes };
