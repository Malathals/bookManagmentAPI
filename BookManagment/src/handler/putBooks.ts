// import express, { Request, Response } from 'express';
// import { BookStore } from '../../models/bookstore';

// const updateBookDetail = async (req: Request, res: Response) => {
//     const bookID = req.params.id;
//     const updatedBookData = req.body;

//     if (!updateBookDetail) {
//         res.status(400).json({ message: 'Updated data are required' });
//         return;
//     }

//     try {
//         const bookToUpdate = await BookStore.findOne({ where: { book_ID: bookID } });

//         if (!bookToUpdate) {
//             return res.status(404).json({ message: 'No book found' });
//         }

//         await bookToUpdate.update(updatedBookData);

//         const updatedBook = await BookStore.findOne({ where: { book_ID: bookID } });

//         return res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
//     } catch (error) {
//         console.error('Error updating book:', error);
//         res.status(500).json({ message: 'Error updating book' });
//     }
// };

// export const patchBook = (router: express.Router): void => {
//     router.put('/books/:id', updateBookDetail);
// };
