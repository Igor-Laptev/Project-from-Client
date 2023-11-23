const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');
const { Book } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({
      // attributes: ["id", "name", "author", "description", "img", "userId", "createdAt", "updatedAt"],
      //tut kostil
    });
    console.log(books);
    const html = res.renderComponent(MainPage, { books });
    res.send(html);
  } catch (error) {
    console.log('---', error.message);
  }
});

module.exports = router;
