import express from 'express'
import { getBooks, getBookDetails } from '../handler/getBooks'
import { addBook } from '../handler/postBooks'
import { deleteBook } from '../handler/deleteBooks'
import { updateBookDetail } from '../handler/putBooks'
import { createUser, logIn } from '../handler/users'
import { verifyToken } from '../middleware/auth'

const router = express.Router()

router.route('/books').get(getBooks).post(verifyToken, addBook)

router
    .route('/books/:id')
    .get(getBookDetails)
    .delete(verifyToken, deleteBook)
    .put(verifyToken, updateBookDetail)

router.route('/login').post(logIn)
router.route('/register').post(createUser)

export default router
