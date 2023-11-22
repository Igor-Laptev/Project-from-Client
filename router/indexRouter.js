const router = require("express").Router();
const mainRouter = require("./views/main.routes")

router.use("/", mainRouter);

module.exports = router;
