const express = require('express');

const app = express();
const {
  loginRouter, userRouter, categoriesRouter,
} = require('./routers');

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

// adição para teste

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
