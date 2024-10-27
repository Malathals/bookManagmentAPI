import { Book } from '../../models/bookstore'

export const addBook = async (req, res) => {
    const { title, author, publishedDate, numberOfPages } = req.body

    if (!title || !author || !publishedDate || !numberOfPages)
        return res.status(400).json({ message: 'All fields are required' })
    if (typeof title !== 'string') {
        return res.status(400).json({ message: 'Title must be a string' })
    }
    if (typeof author !== 'string') {
        return res.status(400).json({ message: 'Author must be a string' })
    }

    if (typeof numberOfPages !== 'number') {
        return res
            .status(400)
            .json({ message: 'Number of pages must be a number' })
    }

    const parsedDate = new Date(publishedDate)
    if (isNaN(parsedDate.getTime())) {
        return res
            .status(400)
            .json({ message: 'Published date must be a valid date' })
    }

    try {
        const newBook = await Book.create({
            title,
            author,
            publishedDate: parsedDate,
            numberOfPages,
        })

        return res
            .status(201)
            .json({ message: 'Book added successfully', newBook })
    } catch (error) {
        console.error('Error posting book:', error)
        return res.status(500).json({ message: 'Error adding book' })
    }
}
