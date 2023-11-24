const router = require("express").Router();

const { Favorite } = require("../../db/models");

router.post("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;

    let book = await Favorite.findOne({ where: { bookId, userId: res.locals.user.id  } });
    if (!book) {
      await Favorite.create({ bookId, userId: res.locals.user.id  });
      res.json({ success: true });
    } else {
      await Favorite.destroy({ where: { bookId, userId: res.locals.user.id  } });
      res.json({ success: false });
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
