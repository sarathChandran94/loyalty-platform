import express from 'express'
import { createCustomer, getCustomers, getCustomerById, getCurrentCustomer } from '../controllers/customerController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', getCustomers)

router.get('/me', protect, getCurrentCustomer)

router.get('/:id', getCustomerById)

router.post('/', createCustomer)

export default router