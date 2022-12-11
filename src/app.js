const express = require('express');

const app = express();
const {
  loginRouter, userRouter, categoriesRouter, postRouter,
} = require('./routers');

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
