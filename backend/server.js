import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoroutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// Connect to the database
connectDB();
// Middleware
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.use(morgan('dev')); 

app.use("/api/todos", todoRoutes);


// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

