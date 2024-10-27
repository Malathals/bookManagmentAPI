import { Book } from '../../models/bookstore'

export const getBooks = async (req, res) => {
    const { page = 1, size = 10 } = req.query
    const offset = (page - 1) * size
    try {
        const books = await Book.findAll({
            offset: offset,
            limit: size,
        })
        !books
            ? res.status(404).json({ message: 'No books found' })
            : res.status(200).json({ message: 'List of books found: ', books })
    } catch (error) {
        console.error('Error fetching books:', error)
        res.status(500).json({ message: 'Error fetching books' })
    }
}

export const getBookDetails = async (req, res) => {
    const bookID = req.params.id

    try {
        const bookDetailed = await Book.findOne({
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
