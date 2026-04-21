import express from 'express';
const router = express.Router();
import { createproduct,
    GetAllproduct,
    productbyid,
    updatedproduct,
    deletedproduct } from '../controller/products.controller.js';

router.post('/', createproduct);
router.get('/', GetAllproduct);
router.post('/:id', productbyid);
router.post('/:id', updatedproduct);
router.post('/:id', deletedproduct);

export default router;
