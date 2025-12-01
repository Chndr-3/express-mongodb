import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI
        if (!uri) throw new Error("Connection Error")
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};