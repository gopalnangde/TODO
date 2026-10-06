import express, { json } from 'express';
import { connectDB } from './services/db.js';
import todoRoutes from "./Routes/todo.route.js";
const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/todo',todoRoutes);

app.listen(port,async()=>{
    await connectDB();
    console.log(`App is listening on port ${port}`)
})