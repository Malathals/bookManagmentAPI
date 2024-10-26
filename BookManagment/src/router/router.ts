import express from 'express'
import { getBooks, getBookDetails } from '../handler/getBooks'
import {addBook} from '../handler/postBooks'
import {deleteBook} from '../handler/deleteBooks'

const router = express.Router()

router.get('/books', getBooks)

router.route('/books/:id')
.get(getBookDetails)
.post(addBook)
.delete(deleteBook)




export default router
