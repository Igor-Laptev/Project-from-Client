const router = require("express").Router();
const mainRouter = require("./views/main.routes");
const profileRouter = require("./views/profile.routes");
const apiBookRouter = require("./api/booksApi.router");
const bookRouter = require("./views/book.routes")

const authRouter = require("./views/authRouter");

const ApiAuthRouter = require("./api/authRouter");

const favoriteRouter = require("./views/favorite.routes");
const favoriteApiRouter = require("./api/favorite.routes");
const addBookRouter = require("./views/addBook.routes");

router.use("/", mainRouter);
router.use("/favorite", favoriteRouter);
router.use("/profile", profileRouter);
router.use("/add", addBookRouter);
router.use("/book", bookRouter);

router.use("/api/favorite", favoriteApiRouter);
router.use("/api/books", apiBookRouter);

router.use("/auth", authRouter);
router.use("/api/auth", ApiAuthRouter);

module.exports = router;
