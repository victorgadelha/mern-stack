const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRoutes = require('./routes/goalRoutes');

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
