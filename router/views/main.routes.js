const router = require("express").Router();
const MainPage = require("../../components/pages/MainPage");
const { Book, Favorite } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    if (!res.locals.user) {
      // Пользователь не зарегистрирован, обработайте ошибку здесь
      res.redirect("/auth/login"); // Перенаправление на страницу входа
      return;
    }
    const books = await Book.findAll();

    const favorites = await Favorite.findAll({
      where: { userId: res.locals.user.id },
    });

    const html = res.renderComponent(MainPage, { books, favorites });
    res.send(html);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
