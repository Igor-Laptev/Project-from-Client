const router = require("express").Router();
const CardBook = require("../../components/CardBook");
const { Favorite } = require("../../db/models");

router.post("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;

    let book = await Favorite.findOne({ where: { bookId, userId: 1 } });
    if (!book) {
      await Favorite.create({ bookId, userId: 1 });
      res.json({ success: true });
    } else {
      await Favorite.destroy({ where: { bookId, userId: 1 } });
      res.json({ success: false });
    }
    // console.log("----",favoriteBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
