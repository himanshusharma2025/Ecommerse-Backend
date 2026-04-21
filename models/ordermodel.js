import mongoose, { SchemaTypeOptions } from 'mongoose';

const orderschema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requird: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        price: {
            type: Number,
            requird: true
        },
        quantity: {
            type: Number,
            requird: true,
            default: 1
        }
    }],
    totalAmount: {
        type: Number,
        requird: true
    },
    status: {
        type: String,
        enum: ['Shipping','Arriving','Pending','Delivered'],
        default: 'Pending'
    },
    cratedAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderschema)

export default Order;