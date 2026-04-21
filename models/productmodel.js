import mongoose from 'mongoose';

const productschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Beauty','Electronics','Decorators','Fashion']
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    images: [String],
},{
    timestamps: true    
});

const Product = mongoose.model('Product', productschema);

export default Product;