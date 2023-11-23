const router = require("express").Router();
const MainPage = require("../../components/pages/MainPage");
const { Book, Favorite } = require("../../db/models");

router.get("/", async (req, res) => {


  try {
    const books = await Book.findAll();

    const favorites = await Favorite.findAll({ where: { userId: 1 } });
    // console.log(favorites);
    const html = res.renderComponent(MainPage, { books, favorites });
    res.send(html);
  } catch (error) {
    console.log("---", error.message);

  }
});

module.exports = router;
