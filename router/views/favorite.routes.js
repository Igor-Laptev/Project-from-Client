const router = require("express").Router();
const FavoritePage = require("../../components/pages/FavoritePage");
const MainPage = require("../../components/pages/MainPage");
const { Favorite, Book } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    let books = await Favorite.findAll({
      where: { userId: res.locals.user.id },
      include: { model: Book },
    });
    books = books.map((book) => book.Book);

    const html = res.renderComponent(FavoritePage, { books });
    res.send(html);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
