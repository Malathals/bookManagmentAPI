import express, { Request, Response } from 'express'
import { BookStore } from '../../models/bookstore'

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await BookStore.findAll()
        !books
            ? res.status(404).json({ message: 'No books found' })
            : res.status(200).json({ message: 'List of books found: ', books })
    } catch (error) {
        console.error('Error fetching books:', error)
        res.status(500).json({ message: 'Error fetching books' })
    }
}

export const getBookDetails = async (req: Request, res: Response) => {
    const bookID = req.params.id

    try {
        const bookDetailed = await BookStore.findOne({
            where: { book_ID: bookID },
        })
        !bookDetailed
            ? res.status(404).json({ message: 'No book found' })
            : res.status(200).json({ message: 'Book detailed: ', bookDetailed })
    } catch (error) {
        console.error('Error fetching book detailed:', error)
        res.status(500).json({ message: 'Error fetching Book detailed' })
    }
}
