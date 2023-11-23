const router = require('express').Router();

const CardBook = require('../../components/CardBook');
const { Book } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, author, description, img } = req.body;

    const book = await Book.create({
      name: name,
      author: author,
      description: description,
      img: img,
      // userId: +res.locals.user.id,
      userId: 1,
    });
    const html = res.renderComponent(CardBook, { book }, { doctype: false });
    res.json({ html, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
