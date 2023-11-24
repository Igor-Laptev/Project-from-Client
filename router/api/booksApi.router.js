const router = require("express").Router();

const CardBook = require("../../components/CardBook");
const { Book, Favorite } = require("../../db/models");
const fileuploadMiddlewares = require("../../utils/fileuploadMiddeleware");

router.post("/add", async (req, res) => {
  try {
    const { name, author, description } = req.body;
    const file = req.files?.homesImg;
    const image = await fileuploadMiddlewares(file);

    const favorites = await Favorite.findAll({
      where: { userId: res.locals.user.id },
    });

    const book = await Book.create({
      name: name,
      author: author,
      description: description,
      img: image,
      userId: res.locals.user.id,
    });

    const html = res.renderComponent(
      CardBook,
      { book, favorites },
      { doctype: false }
    );

    res.json({ html, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, author, description, img } = req.body;

  try {
    const book = await Book.findOne({
      where: { id, userId: res.locals.user.id },
    });
    if (!book) {
      return res.status(400).json({ message: "Нет доступа" });
    }

    book.name = name;
    book.description = description;
    book.img = img;
    book.author = author;

    await book.save();
    res.json({ success: true, updatedBook: book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });


router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // отправить запрос к бд
    const cardDelete = await Book.destroy({
      where: { id, userId: res.locals.user.id },
    });

    if (!cardDelete) {
      return res.status(400).json({ message: "Error request" });
    }
    // просто вернуть статус в ответе без каких-либо данных
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message, "eerrr");
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
