const router = require("express").Router();
const mainRouter = require("./views/main.routes")
const favoriteRouter = require("./views/favorite.routes")
const favoriteApiRouter = require("./api/favorite.routes")

router.use("/", mainRouter);
router.use("/favorite", favoriteRouter);
router.use("/api/favorite", favoriteApiRouter);


module.exports = router;
