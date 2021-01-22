// Core
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Environment
import dotenv from 'dotenv';
dotenv.config();

// Routes
import postRoutes from './routes/posts.js';

// Express
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

// Parameters
const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.nvckw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Load App Page
if (process.env.PROD) {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
}

// Mongodb Atlas Connection
mongoose
    .connect(CONNECT_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => {
            console.log(`**************************************`);
            console.log(`Server is running on port: ${PORT}`);
            console.log(`URL address: http://localhost:${PORT}`);
            console.log(`**************************************`);
        }),
    )
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
