import { Book } from '../../models/bookstore'

export const getBooks = async (req, res) => {
    let { page = 1, size = 10 } = req.query

    page = parseInt(page, 10)
    size = parseInt(size, 10)

    const offset = (page - 1) * size
    try {
        const books = await Book.findAll({
            offset: offset,
            limit: size,
        })
        !books || books.length === 0
            ? res.status(404).json({ message: 'No books available' })
            : res.status(200).json({
                  message: 'List of books found: ',
                  books,
              })
    } catch (error) {
        console.error('Error occurred while fetching books:', error)
        res.status(500).json({
            message:
                ' Internal server error occurred while fetching the list of books.',
        })
    }
}

export const getBookDetails = async (req, res) => {
    const bookID = req.params.id

    try {
        const book = await Book.findOne({
            where: { book_ID: bookID },
        })
        !book
            ? res
                  .status(404)
                  .json({ message: `No book found with ID ${bookID}.` })
            : res.status(200).json({
                  message: `Book details retrieved successfully for ID ${bookID}.`,
                  book,
              })
    } catch (error) {
        console.error('Error occurred while fetching book details:', error)
        res.status(500).json({
            message: 'An error occurred while fetching the book details.',
        })
    }
}
