
const router = require('express').Router();
const mainRouter = require('./views/main.routes');
const profileRouter = require('./views/profile.routes');
const apiBookRouter = require('./api/booksApi.router');

const authRouter = require("./views/authRouter");

const ApiAuthRouter = require("./api/authRouter");

router.use('/profile', profileRouter);
router.use('/api/books', apiBookRouter);

router.use("/", mainRouter);
router.use("/auth", authRouter);

router.use("/api/auth", ApiAuthRouter);


module.exports = router;
