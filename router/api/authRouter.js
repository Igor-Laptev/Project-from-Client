require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../db/models");

const generateTokens = require("../../utils/authUtils");

//reg
router.post("/registration", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);

    if (name && email && phone && password) {
      const hash = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        phone,
        password: hash,
      });

      res.json({
        success: true,
        message: `Пользователь ${name} успешно зарегистрирован!`,
      });
    } else {
      res.status(400).json({ message: "Заполните все поля" });

      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        res.status(400).json({
          success: false,
          message: "Такой пользователь уже зарегистрирован!",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



module.exports = router;
