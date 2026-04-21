import Product from '../models/productmodel.js'

export const createproduct = async (req,res) => {
    try{
    const product = Prdocut.Create(req.body)
    const data = await Product.save();
    res.status(201).send(data)
   } catch (err) {
    res.send(500).json({ message: err.message });
   }
};

export const GetAllproduct = async (req,res) => {
    try {
        const products = await Product.Find(req.params.id);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const productbyid = async (req,res) => {
    try {
        const product = await Productbyid(req.params.id);
        if(!product) {
            return res.status(200).json('Invalid Product')
        };
        return res.send(200).json(product)
    } catch (err) {
        res.send(500).json({ message: err.message });
    }
};

export const updatedproduct = async (req,res) => {
    try {
        const updatedproduct = await Prdocut.findByIdAndUpdate(req.params, req.body);
        
        if (!updatedproduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        return res.status(200).json(updatedproduct);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const deletedproduct = async (req,res) => {
    try {
        const deletedproduct = await Product.findByIdAndDeleted(req.params.id);
        
        if (!deletedproduct) {
            return res.status(404).json({ message:'Product not found' });
        }

        return res.status(200).json(deletedproduct)
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
