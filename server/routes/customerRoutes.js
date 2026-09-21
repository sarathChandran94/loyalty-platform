import express from 'express'
import { createCustomer, getCustomers, getCustomerById } from '../controllers/customerController.js'

const router = express.Router()

router.get('/', getCustomers)

router.get('/:id', getCustomerById)

router.post('/', createCustomer)

export default router