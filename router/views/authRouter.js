const router = require("express").Router();

const LoginPage = require("../../components/pages/LoginPage");
const RegPage = require("../../components/pages/RegPage");

router.get("/registration", (req, res) => {
  const html = res.renderComponent(RegPage);
  res.send(html);
});



module.exports = router;
