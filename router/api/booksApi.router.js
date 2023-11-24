const router = require("express").Router();

const CardBook = require("../../components/CardBook");
const { Book, Favorite } = require("../../db/models");
const fileuploadMiddlewares = require("../../utils/fileuploadMiddeleware");

router.post("/add", async (req, res) => {
  try {
    const { name, author, description } = req.body;
    const file = req.files?.homesImg;
    const image = await fileuploadMiddlewares(file);

    const favorites = await Favorite.findAll({ where: { userId: res.locals.user.id } });
    
    const book = await Book.create({
      name: name,
      author: author,
      description: description,
      img: image,
      userId: res.locals.user.id,
    });

    const html = res.renderComponent(CardBook, { book, favorites }, { doctype: false });

    res.json({ html, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
