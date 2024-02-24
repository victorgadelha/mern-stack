const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRoutes = require('./routes/goalRoutes');

app.use('/api/goals', goalRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
