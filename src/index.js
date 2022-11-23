import app from './app.js';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});