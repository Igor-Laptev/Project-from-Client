const router = require("express").Router();

const mainRouter = require("./views/main.routes");
const authRouter = require("./views/authRouter");

const ApiAuthRouter = require("./api/authRouter");

router.use("/", mainRouter);
router.use("/auth", authRouter);

router.use("/api/auth", ApiAuthRouter);

module.exports = router;
