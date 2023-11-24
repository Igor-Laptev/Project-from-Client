const router = require("express").Router();
const MainPage = require("../../components/pages/MainPage");
const { Book, Favorite } = require("../../db/models");

router.get("/", async (req, res) => {
  try {

    const books = await Book.findAll();
    let favorites=[]
    if(res.locals.user){
      favorites = await Favorite.findAll({
        where: { userId: res.locals.user.id },
      });
    }

    const html = res.renderComponent(MainPage, { books, favorites });
    res.send(html);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
