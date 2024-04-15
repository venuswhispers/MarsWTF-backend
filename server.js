const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Define Routes
app.use('/api/holders', require('./routes/api/holders'));
app.use('/api/presale', require('./routes/api/presale'));

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '45.8.22.219';

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT} and on host ${HOST}`));

// syncTrade();
// syncHistory();
