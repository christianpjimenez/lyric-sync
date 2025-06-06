require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const songsRouter = require('./routes/songs');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/songs', songsRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});