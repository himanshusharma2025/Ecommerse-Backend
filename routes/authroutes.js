import express from 'express';
const router = express.Router();
import { signup, login } from '../controller/auth.controller.js';

router.get("/", (req,res) => {
    res.send("auth route")
})
router.post('signup', signup);
router.post('login', login);

export default router;