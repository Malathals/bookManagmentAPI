import { Book } from '../../models/bookstore'

export const deleteBook = async (req, res) => {
    const bookID = req.params.id

    try {
        const bookToDelete = await Book.destroy({
            where: { book_ID: bookID },
        })

        if (!bookToDelete) {
            return res
                .status(404)
                .json({ message: `No book found with ID ${bookID}.` })
        }

        res.status(200).json({
            message: `Book with ID ${bookID} has been deleted successfully.`,
        })
    } catch (error) {
        console.error('Error while deleting the book:', error)
        res.status(500).json({
            message: 'An error occurred while trying to delete the book.',
        })
    }
}
