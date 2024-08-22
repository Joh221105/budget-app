import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// initialize app
const app = express();

// loads environment variables from .env file
dotenv.config();

// middleware
app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Placeholder');
});


// starting server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
