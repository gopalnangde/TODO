import mongoose from "mongoose";

const connectDB = async()=>{
    const connect = await mongoose.connect("mongodb://localhost:27017/todo_app");
    console.log(`Database connected with host: ${connect.host}`);
}

export {connectDB};