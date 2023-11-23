const router = require('express').Router();
const mainRouter = require('./views/main.routes');
const profileRouter = require('./views/profile.routes');
const apiBookRouter = require('./api/booksApi.router');

router.use('/', mainRouter);
router.use('/profile', profileRouter);
router.use('/api/books', apiBookRouter);

module.exports = router;
