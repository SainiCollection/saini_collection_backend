import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION as string);
        if(conn){
            console.log("MongoDB connected successfully!", conn.connection.name);
        }
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectToMongoDB;