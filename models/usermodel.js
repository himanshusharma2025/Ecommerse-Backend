import mongoose, { mongo } from 'mongoose';

const userschema = new mongoose.Schema({
    name: String,
    email: { type: String , unique : true },
    password: String,
    role: { type: String, unique: true}
})

const User = mongoose.model( 'User', userschema);

export default User;