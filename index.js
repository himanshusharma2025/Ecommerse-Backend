import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authroutes from './routes/authroutes.js';
import productroutes from './routes/productroutes.js';
import orderroutes from './routes/orderroutes.js';

dotenv.config({ quiet: true });

connectDB();

const app = express()

app.use(express.json());

app.get('/api/auth', authroutes)
app.get('/api/products', productroutes)
app.get('/api/orders', orderroutes)

const PORT = process.env.PORT || 8000;

app.listen (PORT, () => {
    console.log("server is running")});