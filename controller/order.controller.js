import Order from '../models/ordermodel.js';

export const createOrder = async (req,res) => {
    try {
        const { items, totalAmount } = req.body;

        if (!items || !totalAmount) {
            return res.status(400).json({ message: "All fields required" });
        }
        
        const order = new Order({ user: req.user._id, items, totalAmount });
        const newOrder = await order.save();
        return res.status(201).json(newOrder);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getOrderById = async (req,res) => {
    try {
        const order = await Order.findById(req.params.id);
        if(!order) {
            return res.status(404).json({message: 'Order not found' });
        }
        
        return res.json(order)
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updatedOrder = async (req,res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if(!updatedOrder) {
            return res.status(404).json({ message: 'Order not found'});
        }
        
         return res.status(200).json(updatedOrder)
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const deletedOrder = async (req,res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if(!deletedOrder) {
            return res.status(404).json({ message: 'Order not found'});
        }

        res.status(200).json({ message: "Order Deleted" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
