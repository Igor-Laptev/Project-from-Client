const router = require("express").Router();
const MainPage = require("../../components/pages/MainPage");
const { Favorite, Book } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    let books = await Favorite.findAll({
      where: { userId: 1 },
      include: { model: Book },
    });
    books = books.map((book) => book.Book);

    const html = res.renderComponent(MainPage, { books });
    res.send(html);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
