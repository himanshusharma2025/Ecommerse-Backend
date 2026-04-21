import express from 'express';
const router = express.Router();
import { createOrder, getOrderById, updatedOrder, deletedOrder } from '../controller/order.controller.js';
import auth from '../middleware/auth.middleware.js';

router.post('/', auth, createOrder);
router.get('/:id', auth,getOrderById);
router.put('/:id', auth, updatedOrder);
router.delete('/:id', auth, deletedOrder);

export default router;

