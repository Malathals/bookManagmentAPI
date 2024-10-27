import { Book } from '../../models/bookstore'

export const updateBookDetail = async (req, res) => {
    const bookID = req.params.id
    const updatedBookData = req.body

    if (!updateBookDetail) {
        return res.status(400).json({ message: 'Updated data are required' })
    }

    try {
        const bookToUpdate = await Book.findOne({
            where: { book_ID: bookID },
        })

        if (!bookToUpdate) {
            return res.status(404).json({ message: 'No book found' })
        }

        await bookToUpdate.update(updatedBookData)

        const updatedBook = await Book.findOne({
            where: { book_ID: bookID },
        })

        return res
            .status(200)
            .json({ message: 'Book updated successfully', book: updatedBook })
    } catch (error) {
        console.error('Error updating book:', error)
        res.status(500).json({ message: 'Error updating book' })
    }
}
