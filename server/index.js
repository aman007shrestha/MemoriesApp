import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
dotenv.config();
import connectDb from './config/db.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());
app.use('/posts', postRoutes);
//  MongoDb
connectDb();

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
