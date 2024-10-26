import express, { Request, Response } from 'express'
import { BookStore } from '../../models/bookstore'

export const deleteBook = async (req: Request, res: Response) => {
    const bookID = req.params.id

    try {
        const bookToDelete = await BookStore.findOne({
            where: { book_ID: bookID },
        })

        if (!bookToDelete) {
            res.status(404).json({ message: 'No book found' })
            return
        }

        await bookToDelete.destroy()
        res.status(200).json({ message: 'Book deleted successfully' })
    } catch (error) {
        console.error('Error deleting book:', error)
        res.status(500).json({ message: 'Error deleting book' })
    }
}
