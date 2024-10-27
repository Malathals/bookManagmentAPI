import { Book } from '../../models/bookstore'

export const updateBookDetail = async (req, res) => {
    const bookID = req.params.id
    const updatedBookData = req.body

    if (!updateBookDetail) {
        return res
            .status(400)
            .json({ message: 'Updated book data is required.' })
    }

    try {
        const bookToUpdate = await Book.findOne({
            where: { book_ID: bookID },
        })

        if (!bookToUpdate) {
            return res
                .status(404)
                .json({ message: `No book found with ID ${bookID}.` })
        }

        await bookToUpdate.update(updatedBookData)

        const updatedBook = await Book.findOne({
            where: { book_ID: bookID },
        })

        return res.status(200).json({
            message: `Book with ID ${bookID} updated successfully.`,
            book: updatedBook,
        })
    } catch (error) {
        console.error('Error occurred while updating the book:', error)
        res.status(500).json({
            message:
                'An internal server error occurred while updating the book.',
        })
    }
}
