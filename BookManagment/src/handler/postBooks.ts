import express, { Request, Response } from 'express'
import { BookStore } from '../../models/bookstore'

export const addBook = async (req: Request, res: Response) => {
    const { title, author, publishedDate, numberOfPages } = req.body

    if (!title || !author || !publishedDate || !numberOfPages)
        res.status(400).json({ message: 'All fields are required' })

    try {
        const newBook = await BookStore.create({
            title,
            author,
            publishedDate,
            numberOfPages,
        })
        res.status(201).json({ message: 'Book added successfully', newBook })
    } catch (error) {
        console.error('Error posting book:', error)
        res.status(500).json({ message: 'Error adding book' })
    }
}


