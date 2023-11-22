require('@babel/register');

require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const indexRouter = require('./router/indexRouter');

const checkUser = require('./middlewares/verifyJWT');

const app = express();

serverConfig(app);

// проверяем, кто сейчас на сайте сидит
app.use(checkUser);

app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => console.log(`Owls live on the  ${PORT} port!`));
