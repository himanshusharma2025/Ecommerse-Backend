import User from '../models/usermodel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signup = async (req,res) => {
    try {
        const { name, email, password } = req.body;
        
        if (! name || !email || !password ) {
            return res.status(400).json({ message: 'All Fields Require' });
        }    
        
        if( password.length < 6) {
            return res.status(400).json({ message: 'Password is too short' })
        }
        
        const userexists = await User.findOne({ email });
        if(userexists) {
            return res.status(409).json({ message: 'This Email Already Exists' });
        }
        
        const hashed = await bcrypt.hash(password, 10);
        
        const user = await User.create({ email, name, password: hashed });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
        return res.status(201).json({ message: 'User Created', token })    
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login  = async (req,res) => {
    try {
        const { email , password} = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields required'})
        }
        
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({ message: 'User Does not Exists'})
        }
        
        const compare = await bcrypt.compare(password, user.password);
        if(!compare) {
            return res.status(401).json({ message: 'Wrong Password'});
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{ expiresIn: '1h'});
        
        return res.status(200).json({ message: 'Login Successful', token})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}