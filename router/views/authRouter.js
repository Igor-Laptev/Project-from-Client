const router = require("express").Router();

const LoginPage = require("../../components/pages/LoginPage");
const RegPage = require("../../components/pages/RegPage");

router.get("/registration", (req, res) => {
  const html = res.renderComponent(RegPage);
  res.send(html);
});

router.get("/login", (req, res) => {
  res.send(res.renderComponent(LoginPage));
});



module.exports = router;
