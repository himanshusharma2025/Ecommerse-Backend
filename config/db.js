import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);

        console.log("Mongodb connected");
    } catch (err) {
        console.log("MongoDB is not connected due to some issues", err.message );
        process.exit(1);
    }
}

export default connectDB;