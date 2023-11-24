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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // проверить, есть ли такой юзер в бд
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Пользователь не найден!",
      });
    }

    //  проверить пароли
    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(404).json({
        success: false,
        message: "Неверный логин или пароль!",
      });
    }

    // сгенерируем jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    // отправляем ответ
    return res.json({
      success: true,
      message: `Авторизация ${user.name} успешна!`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
