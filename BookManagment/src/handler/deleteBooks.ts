import { Book } from '../../models/bookstore'

export const deleteBook = async (req, res) => {
    const bookID = req.params.id

    try {
        const bookToDelete = await Book.findOne({
            where: { book_ID: bookID },
        })

        if (!bookToDelete) {
            return res.status(404).json({ message: 'No book found' })
        }

        await bookToDelete.destroy()
        res.status(200).json({ message: 'Book deleted successfully' })
    } catch (error) {
        console.error('Error deleting book:', error)
        res.status(500).json({ message: 'Error deleting book' })
    }
}
