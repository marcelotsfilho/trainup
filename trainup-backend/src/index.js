require('dotenv').config();
const express = require('express');
const cors = require('cors');

// importação das rotas
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();
app.use(cors());
app.use(express.json());

// configuração das rotas
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});